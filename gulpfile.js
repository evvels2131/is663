'use strict';

const browserSync = require('browser-sync').create();
const cssnano = require('cssnano');
const gulp = require('gulp');
const cached = require('gulp-cached');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const pug = require('gulp-pug');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const cssNext = require('postcss-cssnext');
const atImport = require('postcss-import');

const dist = { path: './docs' };
const src = {
  js: './src/**/*.js',
  sass: './src/**/*.sass',
  pug: './src/**/*.pug',
};

gulp.task('pug', () => {
  return gulp.src(src.pug)
    .pipe(plumber())
    .pipe(cached('pug'))
    .pipe(pug())
    .pipe(gulp.dest(dist.path))
    .pipe(browserSync.stream());
});

gulp.task('sass', () => {
  const preprocessor = [
    atImport(),
    cssNext({ browsers: ['last 1 version'] }),
    cssnano({ autoprefixer: false }),
  ];

  return gulp.src(src.sass)
    .pipe(plumber())
    .pipe(cached('css'))
    .pipe(sass()).on('error', sass.logError)
    .pipe(postcss(preprocessor))
    .pipe(gulp.dest(dist.path))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src(src.js)
    .pipe(plumber())
    .pipe(cached('js'))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist.path))
    .pipe(browserSync.stream());
});

gulp.task('server', ['pug', 'sass', 'js'], () => {
  browserSync.init({ server: './docs', open: false });

  gulp.watch(src.pug, ['pug']);
  gulp.watch(src.sass, ['sass']);
  gulp.watch(src.js, ['js']);
});

gulp.task('default', ['server'], () => {
  console.log('running...');
});
