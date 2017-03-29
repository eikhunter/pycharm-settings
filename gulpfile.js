var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp
        .src('scss/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['sass'], function() {
    return gulp.watch('scss/styles.scss', ['sass']);
});