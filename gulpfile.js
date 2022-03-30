const gulp = require("gulp");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");

const scssCompiler = gulpSass(sass);

gulp.task("autoprefixer", () => {
  return gulp
    .src("./css/**/*.css")
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(gulp.dest("./css"));
});

gulp.task("styles", () => {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(scssCompiler().on("error", scssCompiler.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", () => {
  return gulp.watch("./scss/**/*.scss", gulp.series("styles", "autoprefixer"));
});
