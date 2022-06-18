import http from 'http';
import { utils } from './utils.js';
import { file } from './file.js';
import config from '../config.js';

import { pageHome } from '../pages/home.js';
import { page404 } from '../pages/404.js';
import { pageRegister } from '../pages/register.js';
import { pageLogin } from '../pages/login.js';






const server = {};

server.httpServer = http.createServer(async (req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}/`;
    const parsedURL = new URL(req.url, baseURL);
    const httpMethod = req.method;
    const parsedPathName = parsedURL.pathname;
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
    const isPage = !isTextFile && !isBinaryFile && !isAPI;

    const maxAge = config.cache.periods[fileExtension] ?? config.cache.default;
    const MIMES = {
        html: 'text/html',
        css: 'text/css',
        js: 'text/javascript',
        svg: 'image/svg+xml',
        png: 'image/png',
        jpg: 'image/jpeg',
        ico: 'image/x-icon',
        woff2: 'font/woof2',
        woff: 'font/woof',
        ttf: 'font/ttf',
        off: 'font/otf',
        eot: 'application/vnd.ms-fontobject',
        webmanifest: 'application/manifest+json',
        pdf: 'application/pdf',
        json: 'application/json',

    };

    // const  = 60 * 60;


    /**
     * @param {string} responseContent Turinys, kuri graziname klientui.
     */

    let responseContent = '';

    if (isTextFile) {
        responseContent = await file.readPublic(trimmedPath);
        if (responseContent === false) {
            res.writeHead(404);
        } else {
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension] || MIMES.html,
                'Cache-Control': `max-age=${maxAge} `,
            })

            // responseContent = await file.readPublic(trimmedPath);

        }
    }

    if (isBinaryFile) {
        responseContent = await file.readPublicBinary(trimmedPath);
        if (responseContent === false) {
            res.writeHead(404);

        } else {
            res.writeHead(200, {
                'Content-Type': MIMES[fileExtension] || MIMES.html,
                'Cache-Control': `max-age=${maxAge}`,

            })
        }
    }

    if (isAPI) {
        res.writeHead(503, {
            'Content-Type': MIMES.json,
        })
    }

    if (isPage) {
        res.writeHead(200, {
            'Content-Type': MIMES.html,
        })

        responseContent = pageLogin();
    }
    return res.end(responseContent);
});

server.init = () => {
    server.httpServer.listen(config.httpPort, () => {
        console.log(`Sveikiname, tavo serveris sukasi ant http://localhost:${config.httpPort}`);
    });
}

export { server };

