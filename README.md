# My Awesome Blog
This is a simple blog web-application: each page shows the list of article cuttings and by navigating to the specific article page you can select text and share it via Twitter.

## Project architecture
The project was created on pure ES6 without using any third-party libraries/frameworks. The HTMLS/CSS architecture based on a component-based approach BEM (Block, Element, Modifier). JS structure based on simple component MVC framework with the light routing mechanism, component hierarchy (components are immutable and they are a little bit similar to ReactJS Elements) and services. Each component renders an HTML template with based on constructor params and it will be inserted into the DOM.
The web-application works in all major browsers (Chrome, Firefox, IE11+, Edge, Opera, Safari) and has a flexible layout and optimized for all available screen resolutions.

## Built With

* [Webpack](https://webpack.github.io/docs/) - module bundler
* [Babel](https://babeljs.io/) - ES6+ transpiler
* [Node-SASS](https://github.com/sass/node-sass) - compiler from .SCSS to .CSS
* [Twitter widget](https://dev.twitter.com/web/javascript/loading) - Twitter widget for Websites (share button)

## Environment setup 

```sh
  $ npm install
```

## Development
Start the Webpack server (includes live reloading on changing files):
```sh
  $ npm start
```
Open [http://localhost:9000](http://localhost:9000) in a browser. `./src/app.js` is the entry point.
