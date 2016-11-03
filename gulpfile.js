'use strict';

const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');

const paths = {
  js: './src/**/*.js',
  sass: './src/**/*.sass',
  pug: './src/**/*.pug',

  dist: './dist',
};

gulp.task('pug', function() {
  return gulp.src(paths.pug)
    .pipe(plumber())
    .pipe(pug())
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('sass', function() {
  return gulp.src(paths.sass)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('js', function(cb) {
  return gulp.src(paths.js)
    .pipe(plumber())
    .pipe(uglify())
    .pipe(rename({
      extname: '.min.js'
    }))
  .pipe(gulp.dest(paths.dist))
    .pipe(browserSync.stream());
});

gulp.task('serve', ['pug', 'sass', 'js'], function() {
  browserSync.init({
    server: './dist',
    open: false
  });

  gulp.watch(paths.pug, ['pug']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.js, ['js']);
});

gulp.task('default', ['serve'], function() {
  console.log('running...');
});
