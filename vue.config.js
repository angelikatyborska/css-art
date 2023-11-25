const path = require('path');
const fs = require('fs');
const PrerenderSPAPlugin = require('@dreysolano/prerender-spa-plugin');
let links = require('./src/links');

links = Object.values(links).reduce((acc, a) => [...acc, ...a.map((x) => `\\${x}`)], []);

let plugins = [];

if (process.env.PRERENDER) {
  plugins = [
    new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'dist'),
      // Required - Routes to render.
      routes: ['/', ...links],
      postProcess(data) {
        const newPath = `/covers${data.route}.png`;

        if (!fs.existsSync(`./public${newPath}`)) {
          console.log(`\n\nMissing cover file: ${newPath}\n\n`);
          throw new Error('');
        }

        const html = data.html.replace('/cover.png', newPath);
        return { ...data, html };
      },
    }),
  ];
}

module.exports = {
  configureWebpack: {
    plugins,
  },
  lintOnSave: process.env.NODE_ENV === 'production',
};
