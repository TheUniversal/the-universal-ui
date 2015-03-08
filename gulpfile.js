var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var del = require('del');
var source = require('vinyl-source-stream');
var connect = require('connect');
var serveStatic = require('serve-static')

var PORT = 9000;

gulp.task('clean', function(cb) {
    del(['build'], cb);
});

gulp.task('js', ['clean'], function() {
    browserify('./src/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    gulp.src('./src/main.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.js', ['js']);
    gulp.watch('./src/**/*.html', ['copy']);
});

gulp.task('serve', function() {
    connect()
        .use(serveStatic('./dist'))
        .listen(PORT);
});



