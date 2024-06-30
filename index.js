const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const home = fs.readFileSync('index.html');
const about = fs.readFileSync('about.html');
const service = fs.readFileSync('service.html');
const contact = fs.readFileSync('contact.html');

const server = http.createServer((req, res) => {
    console.log(req.url);
    const url = req.url;

    if (url === '/' || url === '/index.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(home);
    } else if (url === '/about.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(about);
    } else if (url === '/service.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(service);
    } else if (url === '/contact.html') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(contact);
    } else if (url.endsWith('.css')) {
        const cssPath = path.join(__dirname, url);
        fs.readFile(cssPath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>404 Not Found</h1>");
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });
    } else if (url.startsWith('/TASK%202%20NODE/IMAGE/') && (url.endsWith('.jpg') || url.endsWith('.jpeg') || url.endsWith('.png') || url.endsWith('.gif'))) {
        const imagePath = path.join(__dirname, decodeURIComponent(url));
        fs.readFile(imagePath, (err, data) => {
            if (err) {
                res.statusCode = 404;
                res.end("<h1>404 Not Found</h1>");
            } else {
                let contentType;
                if (url.endsWith('.jpg') || url.endsWith('.jpeg')) {
                    contentType = 'image/jpeg';
                } else if (url.endsWith('.png')) {
                    contentType = 'image/png';
                } else if (url.endsWith('.gif')) {
                    contentType = 'image/gif';
                }
                res.statusCode = 200;
                res.setHeader('Content-Type', contentType);
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end("<h1>404 Not Found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
