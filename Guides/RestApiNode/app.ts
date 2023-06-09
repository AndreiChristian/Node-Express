import { createServer, IncomingMessage, ServerResponse } from 'http';

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
    switch (req.url) {
        case '/api/data':
            if (req.method === 'GET') {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Hello, world!' }));
            } else {
                res.writeHead(405); // Method not allowed
                res.end();
            }
            break;
        default:
            res.writeHead(404); // Not found
            res.end();
            break;
    }
});

server.listen(3000, () => console.log('Server is running at http://localhost:3000'));
