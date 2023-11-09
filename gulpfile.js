const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-minify-css');
const replace = require('gulp-replace');
const alias = require('gulp-path-alias');
const path = require('path');

gulp.task('sass', () => gulp.src('./components/css/**/*.scss')
  .pipe(alias({
    paths: {
      '~element-ui': path.resolve(__dirname, './node_modules/element-ui'),
    },
  }))
  .pipe(sass())
  .pipe(replace('~element-ui/lib/theme-chalk/', ''))
  .pipe(autoprefixer({
    browsers: ['ie > 9', 'last 2 versions'],
    cascade: false,
  }))
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css')));

gulp.task('copyfont', () => gulp.src('./node_modules/element-ui/lib/theme-chalk/fonts/**')
  .pipe(minifyCSS())
  .pipe(gulp.dest('dist/css/fonts')));

