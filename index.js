console.log("hello world") 
//27 mins  node js tut in 1 hr https://www.youtube.com/watch?v=BLl32FvcdVM
// backend beginnig   https://www.youtube.com/watch?v=YFmgNiimfyk&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=63

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});