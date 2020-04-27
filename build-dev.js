const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const html = [
    './demo.html'
  ];

  const js = [
    './dist/ng-elements-demo/runtime.js',
    './dist/ng-elements-demo/polyfills.js',
    './dist/ng-elements-demo/styles.js',
    './dist/ng-elements-demo/vendor.js',
    './dist/ng-elements-demo/main.js',
  ];

  await fs.ensureDir('dist/public');
  await concat(html, 'dist/public/index.html');
  await concat(js, 'dist/public/ng-elements-demo.js');

})();
