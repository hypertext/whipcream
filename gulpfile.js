var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    notify = require('gulp-notify'),
    minifycss = require('gulp-minify-css'),
    clean = require('gulp-clean');


gulp.task('styles', function() {
  return gulp.src('scss/whipcream.scss')
    .pipe(sass({ style: 'expanded', 'errLogToConsole': true }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest('css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('clean', function() {
  return gulp.src(['css'], {read: false})
    .pipe(clean());
});

gulp.task('default', ['clean'], function() {
  gulp.start('styles');
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['styles']);
});