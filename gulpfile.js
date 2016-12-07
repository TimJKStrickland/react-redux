var gulp = require('gulp');
var webpack = require('webpack-stream');
var sass = require('gulp-sass');
var connect = require('gulp-connect');

gulp.task('scripts', function(){
	return gulp.src('./src/app/app.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('./build'))
	;
});

gulp.task('html', function(){
	return gulp.src('./src/**/**.html')
	.pipe(gulp.dest('./build'))
	;
});

gulp.task('connect', function() {
  connect.server({
      root: './build/',
      livereload: true,
      port: 8000
  })
});

gulp.task('sass', function(){
	return gulp.src('./src/scss/**/**.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./build'))
})

gulp.task('default', ['scripts', 'html', 'sass', 'connect'], function(){
	gulp.watch('./src/**/**.html', ['html']);
	gulp.watch('./src/app/**/**.js', ['scripts']);
	gulp.watch('./src/scss/**/**.scss', ['sass']);


})