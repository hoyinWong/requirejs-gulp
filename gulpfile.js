var gulp = require('gulp');
var requirejsOptimize = require('gulp-requirejs-optimize');
gulp.task('rjs', function(){
    return gulp.src('src/js/*.js')
    .pipe(
        requirejsOptimize({
            optimize: 'none',
            mainConfigFile: 'src/config.js'
        }))
    .pipe(gulp.dest('dist/js/'));
});