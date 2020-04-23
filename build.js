const fs = require('fs-extra');
const concat = require('concat');

(async function build() {

  const html = [
    './demo.html'
  ];

  const js = [
    './dist/ng-elements-poc/runtime.js',
    './dist/ng-elements-poc/polyfills.js',
    './dist/ng-elements-poc/main.js',
  ];

  await fs.ensureDir('dist/public');
  await concat(html, 'dist/public/index.html');
  await concat(js, 'dist/public/ng-elements-poc.js');

})();





