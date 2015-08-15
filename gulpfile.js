
var gulp        = require('gulp'),
    source      = require('vinyl-source-stream'), // Used to stream bundle for further handling
    browserify  = require('browserify'),
    watchify    = require('watchify'),
    reactify    = require('reactify');
    //concat = require('gulp-concat');

gulp.task('browserify', function() {

  var bundler = browserify({
    entries: ['assets/js/main.js'], // Only need initial file, browserify finds the deps
    transform: [reactify], // We want to convert JSX to normal javascript
    debug: true, // Gives us sourcemapping
    cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
  });

  /*
  bundler
    .bundle()
    //Pass desired output filename to vinyl-source-stream
    .pipe(source('./bundle.js'))
    // Start piping stream to tasks!
    .pipe(gulp.dest('assets/build/'));
    */

    var watcher  = watchify(bundler);
    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('./bundle.js'))
        // This is where you add uglifying etc.
        .pipe(gulp.dest('assets/build/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('./bundle.js'))
    .pipe(gulp.dest('assets/build/'));

});


// I added this so that you see how to run two watch tasks
//gulp.task('css', function () {
//    gulp.watch('styles/**/*.css', function () {
//        return gulp.src('styles/**/*.css')
//        .pipe(concat('main.css'))
//        .pipe(gulp.dest('build/'));
//    });
//});

// Just running the two tasks
gulp.task('default', ['browserify']);
