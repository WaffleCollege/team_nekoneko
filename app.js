const express = require('express');
const app = express();
const mime = {
    ".html": "text/html",
    ".css":  "text/css"
    // 読み取りたいMIMEタイプはここに追記
  };
app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
  response.send('Hello World!');
});

app.get('/select.html', (request, req) => {
    if (req.url == '/') {
        filePath = '/select.html';
      } else {
        filePath = req.url;
      }
      var fullPath = __dirname + filePath;
    
      res.writeHead(200, {"Content-Type": mime[path.extname(fullPath)] || "text/plain"});
      fs.readFile(fullPath, function(err, data) {
        if (err) {
          // エラー時の応答
        } else {
          res.end(data, 'UTF-8');
        }
      });
});

app.listen(8080, () => {
  console.log('server running on port 8080');
});

//メイリー追加
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')));

app.get('/input/practice', (req, res) => {
  res.sendFile(__dirname + '/public/input.html');
})

app.get('/input/list', (req, res) => {
  res.sendFile(__dirname + '/public/input-list.html');
  console.log(`Hello, ${req.query.name}`);
})
