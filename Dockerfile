FROM	debian:wheezy

EXPOSE	4000

RUN	apt-get update -y && apt-get install -y ruby1.9.3 build-essential
RUN	gem install bundler jekyll

CMD	["jekyll", "serve", "--watch"]

