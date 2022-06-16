import http from 'http';
import { utils } from './utils.js';


const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}/`;
    console.log(baseURL); //http://localhost:6969/ sveiki atvyke :)
    const parsedURL = new URL(req.url, baseURL);
    console.log(parsedURL); // http://localhost:6969/  URL {...}  sveiki atvyke :)
    const httpMethod = req.method;
    console.log(httpMethod); // GET   sveiki atvyke :)

    const parsedPathName = parsedURL.pathname;
    console.log(parsedPathName); // undefined
    const trimmedPath = parsedPathName.replace(/^\/+|\/+$/g, '');

    /*
        Uzklausos ateinancios is kliento i si serveri:
            * failai:
                > tekstiniai:
                    * css;
                    * js;
                    * svg;
                > binary (dvejetainis):
                    * jpg, png, gif (nuotraukos);
                    * audio, video;
                    * pdf;
                    * woff, eot, ttf (sriftai);
            * API (formos, upload file, ir t.t);
            * HTML turinys (puslapis)
                */

    const fileExtension = utils.fileExtension(trimmedPath);
    const textFileExtensions = ['css', 'js', 'svg', 'webmanifest', 'txt'];
    const binaryFileExtensions = ['jpg', 'png', 'ico'];
    const isTextFile = textFileExtensions.includes(fileExtension);
    const isBinaryFile = binaryFileExtensions.includes(fileExtension);
    const isAPI = trimmedPath.startsWith('api/');

    // const isHTML = !isTextFile && !isBinaryFile && !isAPIFile;


    if (isTextFile) {
        // nueiti i reikiama vieta, kur yra norimas failas
        // perskaityti failo turini
        // ta turini issiusti klientui
        res.end('TEKSTINIS FAILAS...');
        return
    }
    if (isBinaryFile) {
        res.end('BINARY FAILAS...');
        return
    }
    if (isAPI) {
        res.end('API ATSAKYMAS...')
    }

    res.end(`<!DOCTYPE html>
            <html lang="en">

            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <link rel="stylesheet" href="/css/base/base.css">
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
            </head>

             <body>
                 <h1>Labas rytas 😎  </h1>
                 <img src="./img/logo.png" alt="Logo">
                 <script src="./js/main.js" defer></script>
             </body>
</html>`)
});

server.init = () => {
    server.httpServer.listen(6969);
}

export { server };

