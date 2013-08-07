---
title: "Embedding the Apache Mina ftp server in your tests"
layout: post
tags: unit test, testing
published: false
---
Every once in a while you need some service running while executing your integration tests. Today I needed a running FTP server to test a new route in my [JBoss ESB][0] that has a [NotificationList (basically a *recipient list* pattern][1] with a *NotifyFTP* action as last action in my action pipeline, that pushes the message as a file onto an FTP server.

I already configured this notification target for a local FTP server during deployment, but I because I tried to create a chain of services which all modified the XML message going through my ESB I needed a way to verify the end result of that chain. After a quick search I found [Apache Mina][3] which has an FTP Server component that is embeddable in java applications. It looked easy enough to just start the FTP server, so I added the following code to my test class:

<pre class="brush: java">
  @BeforeClass
	public static void setUpFtpServer() throws Exception {
		// make sure jboss ftp localdir exists
		new File("c:/tmp").mkdirs();
		// set up embedded ftp to receive files
		FtpServerFactory serverFactory = new FtpServerFactory();
		ListenerFactory factory = new ListenerFactory();
		factory.setPort(21);
		// replace the default listener
		Listener listener = factory.createListener();
		serverFactory.addListener("default", listener);
		String ftproot = File.createTempFile("ftp", ".txt").getParent();
		logger.info(">>> ftproot: " + ftproot);
		serverFactory.setUserManager(addUser("testuser", "testuser", ftproot));
		// create necessary structure
		outputDir = new File(ftproot + "/scmp_tes_dir/hoi/out");
		outputDir.mkdirs();
		// start the server
		server = serverFactory.createServer();
		server.start();
	}
  

  @Before
	public void setUp() throws Exception {
		// remove all files that might exist in FTP directory before running anything
		for (File file : outputDir.listFiles()) {
			file.delete();
		}

		// check if ftp is available
		FTPClient ftpClient = new FTPClient();
		ftpClient.connect("127.0.0.1");
		boolean loggedIn = ftpClient.login("testuser", "testuser");
		if (loggedIn) {
			logger.info(">>> FTP running");
		} else {
			throw new RuntimeException(">>> FTP failed");
		}

		//... other setup tasks
	}

  public static UserManager addUser(final String username, final String password, final String ftproot)
			throws IOException {
		PropertiesUserManagerFactory userManagerFactory = new PropertiesUserManagerFactory();
		File userFile = new File("jbossusers.properties");
		userFile.createNewFile();
		userManagerFactory.setFile(userFile);
		userManagerFactory.setPasswordEncryptor(new SaltedPasswordEncryptor());
		UserManager um = userManagerFactory.createUserManager();

		BaseUser user = new BaseUser();
		user.setName(username);
		user.setPassword(password);
		user.setHomeDirectory(ftproot);

		List<Authority> authorities = new ArrayList<Authority>();
		authorities.add(new WritePermission());
		user.setAuthorities(authorities);

		try {
			um.save(user);
		} catch (FtpException e) {
			logger.error("Can not save FTP user", e);
		}
		return um;
	}
</pre>

I'm using [JUnit][4] to build my integration tests, because I'm lazy and got used to running my tests with the junit view in [Eclipse][5]. :-) The `@BeforeClass` method first creates a directory that JBoss relies on (I still don't know what it's doing in `c:/tmp` when creating the `NotifyFTP`...), then starts a new FTP server with *FTP_ROOT* set to my temp directory. I don't care where that directory is, so I'm just creating a temporary file and get the parent path from that.

After that I add a new user with the method `addUser(username, password, directory)` with the previously created directory as her ftp home directory. After that I create some required directory inside my *FTP_ROOT* where *JBoss ESB* wants to place the result files.

This way whenever I run the test, I have a local FTP server running and accepting files with a user that matches the setup in my locally configured *JBoss ESB*, but I can just run the test and see if it is good or not. Validating the XML files in the FTP directory is just a matter of comparing the result with a predefined XML file via [XMLUnit][6], so no suprises on that end.

[0]: https://www.jboss.org/jbossesb/
[1]: http://www.enterpriseintegrationpatterns.com/RecipientList.html
[3]: http://mina.apache.org/ftpserver-project/index.html
[4]: http://junit.org/
[5]: http://eclipse.org/
[6]: http://xmlunit.sourceforge.net/
