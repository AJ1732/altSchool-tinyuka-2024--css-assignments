const { src, dest, watch, series } = require("gulp");
const gulpSass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");

const paths = {
  allScss: "scss/**/*.scss",
  scss: "scss/main.scss",
  css: "css/",
};

function compileSass(done) {
  console.log("Compiling SCSS...");
  src(paths.scss)
    .pipe(gulpSass().on("error", gulpSass.logError))
    .pipe(dest(paths.css));
  done();
}

// function minifyCss(done) {
//   console.log("Minifying CSS files in:", paths.css + "*.css");
//   src(paths.css + "*.css")
//     .pipe(cleanCSS())
//     .on("data", (file) => console.log("Minified:", file.path))
//     .pipe(dest(paths.css));
//   done();
// }

function watchSass() {
  watch(paths.allScss, series(compileSass));
}

exports.default = series(compileSass, watchSass);
