'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

gulp.task('bundle', function() {
    var b = browserify({
            entries: './src/json-bigint.js',
            debug: true
        });
    return b.bundle()
        .pipe(source('json-bigint.js'))
        .pipe(buffer())
        .pipe(uglify()).on('error', gutil.log)
        .pipe(gulp.dest('./dist'));
});

