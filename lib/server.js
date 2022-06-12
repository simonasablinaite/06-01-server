import http from 'http';

const server = {};

server.httpServer = http.createServer((req, res) => {
    const baseURL = `http${req.socket.encryption ? 's' : ''}://${req.headers.host}/`;
    console.log(baseURL);

    const parsedURL = new URL(req.url, baseURL);
    console.log(parsedURL);

    const httpMethod = req.method;
    console.log(httpMethod);

    const parsedPathname = parthURL.parthName;
    const trimmedPath = parsedPathname.replace(/^\/+|\/+$/g, '');



    console.log('gavau uzklausa is kliento...');
    res.end('Sveiki atvyke!')

});

server.init = () => {
    server.httpServer.listen(6969);
}

export { server };

