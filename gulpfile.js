// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function () {
  gulp.src('./style.scss')
    .pipe(sass())    
    .pipe(gulp.dest('./'))
});

gulp.task('watch', function() {
   // Watch .scss files
  gulp.watch('./style.scss', ['styles']);
 });
