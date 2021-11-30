# React/Rails Project Setup Guide

### Requirements
- Ruby 2.7.4
- NodeJS (v16), and npm
- Postgresql

### Install the Latest Ruby Version

Verify which version of Ruby you're running by entering this in the terminal:

```console
$ ruby -v
```

If none, run: 

```console
$ rvm install 2.7.4 --default
```

You should also install the latest versions of `bundler` and `rails`:

```console
$ gem install bundler
$ gem install rails

To install Postgres for WSL, run the following commands from your Ubuntu terminal:

```console
$ sudo apt update
$ sudo apt install postgresql postgresql-contrib
```

Then confirm that Postgres was installed successfully:

```console
$ psql --version
```

Run this command to start the Postgres service:

```console
$ sudo service postgresql start
```

Finally, you'll also need to create a database user so that you are able to
connect to the database from Rails. First, check what your operating system
username is:

```console
$ whoami
```

If your username is "ian", for example, you'd need to create a Postgres user
with that same name. To do so, run this command to open the Postgres CLI:

```console
$ sudo -u postgres -i
```

From the Postgres CLI, run this command (replacing "ian" with your username):

```console
$ createuser -sr ian
```

Then enter `control + d` or type `logout` to exit.

[This guide][postgresql wsl] has more info on setting up Postgres on WSL if you
get stuck.

[postgresql wsl]: https://docs.microsoft.com/en-us/windows/wsl/tutorials/wsl-database#install-postgresql

#### Postgresql Installation for OSX

To install Postgres for OSX, you can use Homebrew:

```console
$ brew install postgresql
```

Once Postgres has been installed, run this command to start the Postgres
service:

```console
$ brew services start postgresql
```


## Once configured

Run the following commands from /example-project

```console
$ bundle install
```

```console
$ rails db:migrate
```

```console
$ rails s
```

```console
$ npm i --prefix client
```

```console
$ npm start --prefix client
```

## ENDPOINT

Once you have started the server, visit **localhost:3000/the_invoices**