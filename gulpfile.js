const { series, parallel } = require('gulp');
const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

function sassTask() {
    return src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
        .pipe(sass())
        .pipe(dest("src/css"))
        .pipe(browserSync.stream());
}

function jsTask() {
    return src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
        .pipe(dest("src/js"))
        .pipe(browserSync.stream());
}

function serveTask() {
    browserSync.init({
        server: "./src"
    });

    watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], series(sassTask));
    watch("src/js/jsfile.js").on('change', browserSync.reload);
    watch("src/*.html").on('change', browserSync.reload);
}

exports.default = parallel(jsTask, serveTask);