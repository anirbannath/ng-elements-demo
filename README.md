# NgElementsDemo

This project demonstrates **Angular Elements** in action.

Demo: [anirbannath.github.io/ng-elements-demo] (https://anirbannath.github.io/ng-elements-demo)

*Angular elements* are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way. Visit [Angular Guide](https://angular.io/guide/elements) for more information.

## Project Setup

- Clone this repository or download it to your local machine.
- Run `npm install`
- Run `npm run build`
- Open **index.html** from the folder **dist/public** or serve the folder **dist/public** using `http-server` or something equivalent.

This *index.html* is a vanilla index.html file which has the script loaded to it which was built by the Angular build process.

Thus, you can directly open the **index.html** file or may install **http-server** globally by the command `npm install http-server -g` and launch *http-server* from **dist/public** folder by getting into the folder and running `http-server`.

## Build script explaination

If you see the build script in the package.json file you will notice, there is a command `node build.js` after the `ng build --prod`.
This basically concats all the Angular build javascript files into one file for ease of importing in the index.html file which then can rely on just one javascript file. *The extra step can be ignored by developers if wanted.*

## Browser Support

The Angular Elements are built over the concept of HTML Custom Elements or WebComponents. Thus, it supports more mordern browsers. Get the full list of browser support in [CANIUSE](https://caniuse.com/#search=web%20component)
