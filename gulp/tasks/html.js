import fs from 'fs';
import pug from 'gulp-pug';
import data from 'gulp-data';
import webHtmlNosvg from 'gulp-webp-html-nosvg';
import versionNumber from 'gulp-version-number';

const getData = () => {
  const common = JSON.parse(fs.readFileSync('./src/json/common.json'));
  const customers = JSON.parse(fs.readFileSync('./src/json/customers.json'));
  return { ...common, ...customers };
};

export const html = () => {
  const { gulp, path, plugins, isBuild } = app;

  return gulp
    .src(path.src.html)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(data(getData))
    .pipe(
      pug({
        pretty: !isBuild,
        verbose: true,
      }),
    )
    .pipe(plugins.replace(/@img\//g, 'img/'))
    .pipe(plugins.gulpIf(isBuild, webHtmlNosvg()))
    .pipe(
      plugins.gulpIf(
        isBuild,
        versionNumber({
          value: '%DT%',
          append: {
            key: '_v',
            cover: 0,
            to: ['css', 'js'],
          },
          output: {
            file: 'gulp/version.json',
          },
        }),
      ),
    )
    .pipe(gulp.dest(path.build.html))
    .pipe(plugins.browserSync.stream());
};
