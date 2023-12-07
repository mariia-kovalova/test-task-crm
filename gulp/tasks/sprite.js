import svgSprite from 'gulp-svg-sprite';
import size from 'gulp-size';

export const sprite = () => {
  const { gulp, path, plugins } = app;

  return gulp
    .src(path.src.sprite)
    .pipe(
      plugins.plumber(
        plugins.notify.onError({
          title: 'SVG',
          message: 'Error: <%= error.message %>',
        }),
      ),
    )
    .pipe(plugins.newer(path.build.images))
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../sprite.svg',
          },
        },
      }),
    )
    .pipe(size({ showFiles: true }))
    .pipe(gulp.dest(path.build.images));
};
