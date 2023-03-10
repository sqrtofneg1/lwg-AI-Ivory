const gulp = require("gulp");

const concat = require("gulp-concat");

gulp.task("concat", function() {
  return gulp.src("src/*.js")
    .pipe(concat("ivory.js"))
    .pipe(gulp.dest("dist"));
});

gulp.task("default", gulp.parallel("concat"), (doneCallback) => doneCallback());