---
title: 'Minimaler SQL-Client in Java'
date: 2008-03-10 00:00:00 
layout: post
---
Ich hab gerade einen kleinen SQL-Client geschrieben, mit dem man einfach SQL-Statements gegen eine Datenbank absetzen kann. Falls jemand auf der Suche ist, bedient euch. Wer Verbesserungen hat, der kann sich gern in den Kommentaren zu Wort melden. 😀

````java
package com.basf.migration.region;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import com.csc.provider.DbmsProviderFactory;
import com.csc.provider.UnavailableException;

public class SimpleSqlClient {

  public SimpleSqlClient(String statement, String driver, String dburl, String username, String password) {
          Connection conn = null;
          try {
              Class.forName(driver);
        conn = DriverManager.getConnection(dburl, username, password);
        execute(conn, statement);
      } catch (SQLException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      } catch (ClassNotFoundException e) {
        // TODO Auto-generated catch block
        e.printStackTrace();
      } finally {
        try {
          conn.close();
        } catch (SQLException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        } catch(NullPointerException e) {
          // TODO Auto-generated catch block
          e.printStackTrace();
        }
      }
    }

private void execute(Connection conn, String statement) throws SQLException {

      Statement stmt = conn.createStatement();
      boolean executed = stmt.execute(statement);
      ResultSet result = stmt.getResultSet();
      for (int column = 1; column&lt;= result.getMetaData().getColumnCount(); column++) {
        System.out.print(result.getMetaData().getColumnName(column) + "");
      }
      System.out.println();
while(result.next()) {
        for (int column = 1; column&lt;= result.getMetaData().getColumnCount(); column++) {
          System.out.print(result.getObject(column) + "");
        }
        System.out.println();
      }
    }

public static void main(String[] args) {
      if(args == null || args.length != 5) {
        System.err.println("Usage:\t" + SimpleSqlClient.class + " SQLSTATEMENT DRIVER_CLASSNAME DB_URL USERNAME PASSWORD");
        System.exit(-1);
      } else if(args.length == 5) {
        new SimpleSqlClient(args[0], args[1], args[2], args[3], args[4]);

    }
}
````
