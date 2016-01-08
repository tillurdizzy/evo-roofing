/* required methods */
var gulp			= require('gulp');
var gutil 			= require('gulp-util');
var concat			= require('gulp-concat');
var rename			= require('gulp-rename');
var uglify			= require('gulp-uglify');
var runSequence		= require('run-sequence');
var watch			= require('gulp-watch');
var sass			= require('gulp-sass');
var jshint 			= require('gulp-jshint');
var Notification 	= require('node-notifier');
var postcss			= require('gulp-postcss');
var csswring		= require('csswring');
var autoprefixer	= require('autoprefixer-core');


/* tasks */

gulp.task('devjs', function(){
	return gulp.src([
		'src/resources/js/*.js',
		'src/resources/js/controllers/*.js',
		'src/resources/js/directives/*.js',
		'src/resources/js/services/*.js'])
	.pipe(concat('dev.js'))
	.pipe(gulp.dest('src/resources/dist'));
});

// configure the jshint task
gulp.task('jshint', function() {
  return gulp.src([
		'src/resources/js/*.js',
		'src/resources/js/controllers/*.js',
		'src/resources/js/directives/*.js',
		'src/resources/js/services/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

/* vendor dependencies */
gulp.task('depsjs',function(){
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/jquery/dist/jquery.min.js',
		'bower_components/modernizer/modernizr.js',
		'bower_components/angular-animate/angular-animate.min.js',
		'bower_components/angular-sanitize/angular-sanitize.min.js',
		'bower_components/angular-slick/dist/slick.min.js',
		'bower_components/slick-carousel/slick/slick.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'bower_components/underscore/underscore.min.js',
		'bower_components/videogular/videogular/videogular.min.js',
		'bower_components/videogular/videogular-controls/vg-controls.min.js',
		'bower_components/videogular/videogular-overlay-play/vg-overlay-play.min.js',
		'bower_components/videogular/videogular-poster/vg-poster.min.js',
		'bower_components/videogular/videogular-buffering/vg-buffering.minjs',
		'bower_components/ngDialog/js/ngDialog.min.js'])
	.pipe(concat('deps.js'))
	.pipe(gulp.dest('src'));
});

// Standard error handler
function standardHandler(err){
  // Notification
  var notifier = Notification();
  notifier.notify({ message: 'Error: ' + err.message });
  // Log to console
  util.log(util.colors.red('Error'), err.message);
}


gulp.task('distjs',function(){
	return gulp.src(['src/deps.js'])
	.pipe(rename('deps.min.js'))
	.pipe(uglify())
	.on('error', function(err){ console.log(err.message); })
	.pipe(gulp.dest('bin'));
});

gulp.task('sass',function(){
	var processors=[
		csswring,autoprefixer
	];
	return gulp.src(['scss/styles.scss'])
	.pipe(sass())
	.pipe(postcss(processors))
	.on('error', standardHandler)
	.pipe(gulp.dest('src/resources/css'));
});

gulp.task('watch',function(){
	gulp.watch([
		'src/resources/js/*.js',
		'src/resources/js/controllers/*.js',
		'src/resources/js/directives/*.js',
		'src/resources/js/services/*.js'],['jshint']);
	gulp.watch(['scss/*.scss'],['sass']);
});

gulp.task('default',function(callback){
	runSequence('depsjs','distjs',callback);
});