const express = require('express');
const app = express();

app.use(express.static('public'));
let port = process.env.PORT||8080;

app.get('/',(req,res)=>{
  res.writeHead(200);
  res.sendFile('public/index.html');
});

app.get('/*',(req,res)=>{
  res.writeHead(500);
  res.send('Invalid');
})

app.listen(port,()=>{
  console.log('listening on port 8080');
})
