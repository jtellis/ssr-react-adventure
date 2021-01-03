import express from 'express';
import bodyParser from 'body-parser';
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

let items = [...seedData.items];

app.post('/api/items', bodyParser.urlencoded({extended: false}), (req, res) => {
  items.push(req.body);
  res.sendStatus(201);
});

app.get('/api/items', (req, res) => { res.send(items) });

app.use( express.static('./dist/client') );

app.listen(port, () => {
  console.log(`Serving http://localhost:${port}`)
});
