const gulp = require('gulp');
const i18n = require('gulp-html-i18n');

gulp.task('default', function () {
    const dest = './';
    const index = './src/resume.html';

    return gulp
        .src(index)
        .pipe(
            i18n({
                langDir: './lang',
                defaultLang: 'en-US',
                renderEngine: 'mustache',
            })
        )
        .pipe(gulp.dest(dest));
});

gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html', './lang/**/*.yaml'], gulp.series('default'));
});
