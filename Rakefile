
def jekyll(opts="", path="")
  sh path + "jekyll " + opts
end

desc "Build site using Jekyll"
task :build do
  jekyll "build"
end

desc "Serve on Localhost with port 4000"
task :default do
  jekyll "serve --watch"
end

namespace :deploy do
  desc "Deploy to Live"
  task :live => :build do
    sh "rsync -irtz --delete _site/* ssh-191922-cringe@www.kopis.de:/kunden/191922_26384/blog/"
  end
  
  desc "Deploy to Dev and Live"
  task :all => [:live]
end

desc "remove generated files"
task :clean do
  sh "rm -rf _site"
end

