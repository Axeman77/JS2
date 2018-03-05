var gulp = require ('gulp');
var concat = require('gulp-concat');
var csso = require('gulp-csso');


// все *.js в один файл
gulp.task ('scripts', function () {
    return gulp.src('./*.js') // путь к папке со скриптами
        .pipe(concat('all.js')) // в какой файл объединить
        .pipe(gulp.dest('./dist/'));
});

// минимизация css
gulp.task ('minimaziCSS', function () {
    return gulp.src('./*.css')
        .pipe(csso({
            restructure: false,
            sourceMap: true,
            debug: true
        }))
        .pipe(gulp.dest('dist/out'));
});

