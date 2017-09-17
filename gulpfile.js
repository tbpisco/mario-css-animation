// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('./scss/style.scss')
    .pipe(sass())    
    .pipe(gulp.dest('./css'))
});

gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('./scss/*.scss', ['styles']);
 });
