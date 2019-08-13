const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/ng-web-comp-second-element/runtime-es5.js',
    // './dist/ng-web-comp-second-element/polyfills-es5.js',
    './dist/ng-web-comp-second-element/scripts.js',
    './dist/ng-web-comp-second-element/main-es5.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/ng-web-comp-second-element.js');
  await fs.copyFile(
    './dist/ng-web-comp-second-element/styles.css',
    'elements/styles.css'
  );
})();
