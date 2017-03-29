var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp
        .src('/sass/styles.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('/css/styles.min.css'));
});

gulp.task('watch', ['sass'], function() {
    return gulp.watch('/sass/styles.scss', ['sass']);
});