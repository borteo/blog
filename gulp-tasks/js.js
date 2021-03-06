var gulp        = require('gulp');
var foreach     = require('gulp-foreach');
var uglify      = require('gulp-uglifyjs');
var browserSync = require('browser-sync');
//var pako 				= require('gulp-pako');

gulp.task('js', ['browserify'], function() {
  
  // in order to uglify, (gzip) and generate N files,
  // I have to loop on every browserify bundle file
  return gulp.src('assets/js/*.js')
    .pipe( 
      foreach( 
        function( stream, file ) {
          return stream
            .pipe( uglify() )
            // .pipe(pako.gzip())
            .pipe( gulp.dest('assets/js') );
        }
      )
    )
    .pipe( browserSync.reload( { stream:true } ) );

});
