var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano');

gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
    .pipe(cssnano())
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});


gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('./sass/*.sass', ['sass']);
  gulp.watch('./*.php').on('change', livereload.changed);
});

gulp.task('default', ['watch', 'sass']);