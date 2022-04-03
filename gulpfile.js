const gulp = require("gulp");
const sass = require("sass");
const gulpSass = require("gulp-sass");
const autoprefixer = require("gulp-autoprefixer");
const babel = require("gulp-babel");
const gulpConcat = require("gulp-concat");

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

gulp.task("js", () => {
  return gulp
    .src("./src/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/env"],
      })
    )
    .pipe(gulpConcat("index.js"))
    .pipe(gulp.dest("./dest/js"));
});

gulp.task("styles", () => {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(scssCompiler().on("error", scssCompiler.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dest/css"));
});

gulp.task("watch", () => {
  return gulp.watch("./src/**/*", gulp.series("styles", "autoprefixer", "js"));
});
