const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');
let links = require('./src/links.js');

links = Object.values(links).reduce((acc, a) => [...acc, ...a.map(x => `\\${x}`)], []);

module.exports = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: ['/', ...links],
      }),
    ],
  },
};
