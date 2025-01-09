const http = require('http');
const fs = require('fs');
const path = require('path');

// Порт, на котором будет работать сервер
const PORT = 3000;

http.createServer((req, res) => {
    // Определяем путь к index.html
    const filePath = path.join(__dirname, 'index.html');

    // Читаем файл index.html
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        }
    });
}).listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
