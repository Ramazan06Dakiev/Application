"use strict"
// переменная gulp, require возвращает плагин gulp из папки node modules
var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-dart-sass'); // при gulp-sass не запускался browser-sync, прочитал в источниках, что нужно либо "установить / понизить версию node.js до стабильной версии, установить совместимую версию node-sass" либо установить "gulp-dart-sass"

gulp.task('browser-sync', function(){
    // название переменной bs. инициализация bs
    bs.init({
        // папка с локальным сервером
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch("src/*.html").on('change', bs.reload);
});

// task для sass
gulp.task('sass', function(){
	return gulp.src('src/sass/**/*.sass') 
		.pipe(sass()) 
		.pipe(gulp.dest('src/css')) 
		
});
gulp.watch("src/css/*.css").on('change', bs.reload);


  

