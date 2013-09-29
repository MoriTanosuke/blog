
def jekyll(opts="", path="")
  sh path + "jekyll " + opts
end

desc "Generate CSS from SASS"
task :generate do
  sh "sass --update css/style.scss:css/style.css --style compressed"
end

desc "Build site using Jekyll"
task :build => :generate do
  jekyll "build"
end

desc "Serve on Localhost with port 4000"
task :default => :generate do
  jekyll "serve --watch"
end

namespace :deploy do
  desc "Deploy to Live"
  task :live => :build do
    sh "rsync -irtz --delete _site/* ssh-191922-cringe@www.kopis.de:/kunden/191922_26384/blog/"
  end
  
  desc "Deploy to Amazon S3 bucket"
  task :s3 do
    sh "s3cmd sync --acl-public --exclude '*.*' --include '*.png' --include '*.jpg' --include '*.ico' --add-header=\"Expires: Sat, 20 Nov 2020 18:46:39 GMT\" --add-header=\"Cache-Control: max-age=6048000\" _site/ s3://blog.kopis.de"
    sh "s3cmd sync --acl-public --exclude '*.*' --include  '*.css' --include '*.js' --add-header=\"Cache-Control: max-age=604800\"  _site/ s3://blog.kopis.de"
    sh "s3cmd sync --acl-public --exclude '*.*' --include  '*.html' --include 'atom.xml' --add-header=\"Cache-Control: max-age=7200, must-revalidate\"  _site/ s3://blog.kopis.de"
    sh "s3cmd sync --acl-public --exclude 'Rakefile' --exclude 'Gemfile' --exclude 'assets/'  _site/ s3://blog.kopis.de"
    sh "s3cmd sync --acl-public --delete-removed  _site/ s3://blog.kopis.de"
  end
  
  desc "Deploy to Dev and Live"
  task :all => [:live, :s3]
end

desc "remove generated files"
task :clean do
  sh "rm -rf _site"
end

