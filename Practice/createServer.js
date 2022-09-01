const http = require("http");

http.createServer((req, res) => {
    res.write('hihi');
    res.end('hellohello')
}).listen(8080, () => {
    console.log('8080포트')
});