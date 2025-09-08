'use strict';

const // Load gulp plugins and assigning them semantic names.
  gulp = require('gulp'),
  log = require('fancy-log'),
  shell = require('gulp-shell'), // Command line interface for gulp
  // CSS related plugins
  sass = require('gulp-sass'), // Gulp plugin for Sass compilation
  sassglob = require('gulp-sass-glob'), // Glob Sass imports
  postcss = require("gulp-postcss"), // pipe css through several plugins (see postcss.config.js) and parse once
  cssnano = require('cssnano'), // Minify css
  // Utility related plugins
  uglify = require('gulp-uglify-es').default, // Minify Javascript with UglifyJS3
  sourcemaps = require('gulp-sourcemaps'), // Maps code in a compressed file back to it's original position in a source file
  notify = require('gulp-notify'), // Sends message notification via OS
  concat = require('gulp-concat') // Concatenates files together

// const config = require('./manifest.json');

const paths = {
  sassSrc: ['../sass/*.scss'], 
  sassDest: '../css',
  jsSrc: ['js/*.js', 'node_modules/vanilla-autofill-event/src/autofill-event.js'],
  jsDest: '../js/build/*.js'
};


// Compile Sass
function compileSass() {
  return gulp.src(paths.sassSrc)
  .pipe(sourcemaps.init())
  .pipe(sassglob())
  .pipe(
    sass({
      outputStyle: 'expanded',
      sourcemaps: true
    }).on('error', notify.onError('<%= error.message %>')) // alt sass.logError
  )
  .pipe(postcss([ cssnano() ]))
  .pipe(sourcemaps.write('.')) // Write to same directory where CSS will live (allows for the proper reference to Sourcemap in CSS file!)
  .pipe(gulp.dest(paths.sassDest))
}
exports.sass = compileSass // enables 'gulp sass' from the terminal


// Compile JS Scripts
function compileScripts() {
  return (
    gulp.src(paths.jsSrc)
    .pipe(sourcemaps.init())
    .pipe(uglify()) // minify js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.jsDest)));
}
exports.scripts = compileScripts // enables 'gulp scripts' from the terminal



// Watch Task
function watchTask() {
  gulp.watch(paths.sassSrc, gulp.compileSass);
  gulp.watch(paths.jsSrc, gulp.compileScripts);
}
exports.watch = watchTask // enables 'gulp watch' from the terminal

// Default task
exports.default = gulp.series(compileSass, compileScripts, watchTask);
