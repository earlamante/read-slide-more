var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify-js', function() {
	gulp.src('src/jquery.read.slide.more.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('build'))
});

gulp.task('default', ['minify-js']);