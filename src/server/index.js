const path = require('path');
const fs = require('fs');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { default: App } = require('../client/App');

const app = express();
const port = 5000;

const distDir = './dist';
const clientDir = `${distDir}/client`

app.get('/', (req, res) => {
  let indexPath = path.resolve(`${clientDir}/index.html`);

  fs.readFile(indexPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }
    return res.send(
      data.replace(
        '<div id="app"></div>',
        `<div id="app">${ ReactDOMServer.renderToString(<App />) }</div>`
      )
    );
  });
});

app.use( express.static('./dist/client') );

app.listen(port, () => {
  console.log(`Serving http://localhost:${port}`)
});
