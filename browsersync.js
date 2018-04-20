/* eslint-disable */
const browserSync = require('browser-sync');

browserSync({
  server: 'dist',
  files: ['dist/*.html', 'dist/*.css', 'dist/*js', 'dist/*.png'],
});
