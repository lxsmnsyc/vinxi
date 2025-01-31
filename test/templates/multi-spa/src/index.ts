import { eventHandler } from "vinxi/server";

export default eventHandler((event) => {
  return new Response(`
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link rel="icon" href="/favicon.ico" />
    </head>
    <body>
      <div id="root"></div>
      <script src="./src/client.tsx" type="module"></script>
    </body>
  </html>
  `);
});