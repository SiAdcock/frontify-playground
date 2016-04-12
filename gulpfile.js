const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('default', ['sass']);
gulp.task('sass', () => {
  gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('build'));
});
