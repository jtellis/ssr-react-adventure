import React from 'react';

export default ({ insert }) => (
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SSR React Adventure</title>
    </head>
    <body>
        <div id="app">{ insert }</div>
        <script src="./index.js"></script>
    </body>
    </html>
);
