/**
 * gulp.files
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-08-22 17:30:49
 * @version $Id$
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('server',function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch(`*.html`).on('change', browserSync.reload);
    gulp.watch(`js/*.js`).on('change', browserSync.reload);
    gulp.watch(`css/*.css`).on('change', browserSync.reload);
})


gulp.task('stylus', function() {
    return gulp.src(filePath.css.src())
        .pipe(stylus({
            compress: true,
            use: nib()
        }))
        .pipe(gulp.dest(filePath.css.dest()))
        .pipe(browserSync.stream())
})

gulp.task('stylus:watch', ['stylus'], browserSync.reload())


gulp.task('babel', function() {
    mod = argv.m;
    return gulp.src(filePath.js.src())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(filePath.js.dest()));
})

gulp.task('babel:watch', ['babel'], browserSync.reload())