# frontend-2016-lecture-05

#### 1. Install nvm:

```sh
$ sudo apt-get install build-essential libssl-dev
$ curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh
$ source ~/.profile
```

View the list of available versions:

```sh
$ nvm ls-remote
```

#### 2. Install any version:

```sh
$ nvm install 6.9.1
$ nvm use 6.9.1
```

Check your version:

```sh
$ node -v
```

#### 3. Install gulp globally:

```sh
$ npm install --global gulp-cli
```

#### 4. Initialize your project directory:

```sh
$ npm init
```

#### 5. Install gulp in your project devDependencies:

```sh
$ npm install --save-dev gulp
```

#### 6. Create a gulpfile.js at the root of your project:

```js
var gulp = require('gulp');

gulp.task('default', function() {
  // place code for your default task here
});
```
