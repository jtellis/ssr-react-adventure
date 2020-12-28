import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/App';
import PageTemplate from './PageTemplate';

import seedData from './seed.json';

const app = express();
const port = 5000;

app.get('/', (req, res) => res.send(
      `<!DOCTYPE html>
      ${ ReactDOMServer.renderToStaticMarkup( <PageTemplate insert={ <App /> } /> ) }`
));


app.get('/api/items', (req, res) => res.send(seedData.items));

app.use( express.static('./dist/client') );

app.listen(port, () => {
  console.log(`Serving http://localhost:${port}`)
});
