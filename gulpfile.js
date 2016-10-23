"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //run a local web server
var open = require('gulp-open'); //open a url in a web browser
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var babelify = require('babelify');
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

var config = {
	port: 9005,
	devBaseUrl: 'http://localhost',
	paths: {
		html: './src/*.html',
		js: './src/**/*.js',
		css: [
			'node_modules/css-toggle-switch/dist/toggle-switch.css',
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
			'src/css/*.css'
		],
		images: './src/img/*',
		fonts: 'node_modules/bootstrap/dist/fonts/*',
		dist: './dist',
		mainJs: './src/main.js'
	}
};

gulp.task('connect', function() {
	connect.server({
		root: ['dist'],
		port: config.port,
		base: config.devBaseUrl,
		livereload:true
	});
});

gulp.task('open', ['connect'], function() {
	gulp.src('dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('imagemin', function() {
  gulp.src(config.paths.images)
    .pipe(cache(imagemin()))
    .pipe(gulp.dest(config.paths.dist + '/images'));
});

gulp.task('html', function() {
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function() {
	browserify(config.paths.mainJs)
		.transform(babelify, { presets: ['react']})
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function() {
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'))
		.pipe(connect.reload());
});

gulp.task('fonts', function() {
	gulp.src(config.paths.fonts)
		.pipe(gulp.dest(config.paths.dist + '/fonts'));
});

gulp.task('lint', function() {
	return gulp.src(config.paths.js)
		.pipe(lint())
		.pipe(lint.format());
});

gulp.task('watch', function() {
	gulp.watch(config.paths.html, ['html']);
	gulp.watch(config.paths.js, ['js', 'lint']);
	gulp.watch(config.paths.css, ['css']);
});

gulp.task('default', ['html', 'imagemin', 'js', 'css', 'fonts', 'lint', 'open', 'watch']);