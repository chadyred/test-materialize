var gulp = require('gulp'),
  less = require('gulp-less'),
  rename = require('gulp-rename'),
  connect = require('gulp-connect');
var minifycss = require('gulp-minify-css');
 
 //Creation d'un serveur
gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true,//ajout d'une ligne dans le code avec le port 35XXX en bas
    port: 3333
  });
});


gulp.task('styles', function(){
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('html', function () {
  gulp.src('*.html')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  gulp.watch("*.html", ['html']);
  gulp.watch("css/*.css", ['styles']);
});
 
gulp.task('default', ['connect', 'watch']);
