var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watch = require('gulp-watch');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var envify = require('envify');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');

var environment = process.env.NODE_ENV;

if (!process.env.API_ROOT_URL || !process.env.GOOGLE_ANALYTICS_KEY) {
  require('./env');
}

/**
  Default task that combines all tasks that are required to build the app.
  Invokes watch if the environment is 'development'.
  Watchify automatically and quickly updates the css and js files,
  so you don't have to run the 'gulp' task every time.
*/
gulp.task('default', ['compile-css', 'move-files', 'compile-js', 'browserify'], function() {
  if (environment === 'development') {
     gulp.watch('./static/css/*.scss', ['compile-css']);
     gulp.watch('./static/js/*.js', ['compile-js']);
     return buildScript(true);
  }
});

/**
  Compile SCSS stylesheets.
*/
gulp.task('compile-css', function() {
  // Move Bootstrap fonts first
  gulp.src('./node_modules/bootstrap-sass/assets/fonts/**')
    .pipe(gulp.dest('./build/fonts'));

  // Compule SCSS stylesheets
  gulp.src('./static/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('app.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./build/css'));
});

/**
  Move static assets to build folder.
*/
gulp.task('move-files', function() {
  gulp.src('./static/img/*.{svg,jpg,png}')
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('./build/img'));

  gulp.src('./static/img/favicons/*')
    .pipe(imagemin({progressive: true}))
    .pipe(gulp.dest('./build'));

  gulp.src('./static/index.html')
    .pipe(gulp.dest('./build'));
});

/**
  Concatinate, compile and uglify the js and jsx files into one big js file.
  Uglifying is not performed in development and test environments to
  simplify debugging.
*/
function buildScript(watch) {
  var props = {
    entries: ['./src/main.js'],
    debug: true,
    cache: {},
    packageCache: {},
    transform: [envify, reactify]
  }

  var bundler = watch ? watchify(browserify(props)) : browserify(props);
  bundler.on('update', function() {
    rebundle(bundler);
    gutil.log('Rebundle...');
  });
}

function rebundle(bundler) {
  var stream = bundler.bundle();
  return stream
    .on('error', gutil.log)
    .pipe(source('main.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify().on('error', gutil.log))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/js'));
}

gulp.task('browserify', function() {
  return buildScript(false);
});

gulp.task('compile-js', function() {
  gulp.src(['./static/js/*.js'])
    .pipe()
    .pipe(gulp.dest('./build/js'));
});
