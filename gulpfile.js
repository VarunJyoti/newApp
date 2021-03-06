'use strict';
var gulp = require('gulp')
var sass       = require('gulp-sass')
var concat     = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')
var plumber    = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var uglify     = require('gulp-uglify')
var server     = require('gulp-express')
var express = require('express')
var app = express()

gulp.task('server',function(){
  server.run(['app.js']);
})

gulp.task('js', function () {
  return gulp.src(['src/**/*Module.js','src/**/app.js', 'src/**/*.js'])
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
      .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/js'))
})

gulp.task('js:watch', ['js'], function () {
  gulp.watch('src/**/*.js', ['js'])
})

gulp.task('css', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(plumber())
    .pipe(concat('app.scss'))
    .pipe(sourcemaps.init())
      .pipe(plumber()) // prevents compilation errors from killing gulp
      .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/stylesheets'))
})

gulp.task('css:watch', ['css'], function () {
  gulp.watch('scss/**/*.scss', ['css'])
})

gulp.task('express', function () {
	app.use(express.static('.'))
	app.listen(3000)
})


gulp.task('default', ['js:watch', 'css:watch'])

