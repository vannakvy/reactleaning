const express = require('express');
const path = require('path');
const server = express();
// const __dirname = path.resolve();


let env = "production";
if (env === 'production') {


  server.use(express.static(path.join(__dirname, '../my_app/build')));
  server.get('*', (req, res) =>
   res.sendFile(path.resolve(__dirname, '../my_app', 'build', 'index.html'))
  );
 } else {
  server.get('/', (req, res) => {
   res.send('API is running....');
  });
 }



server.listen(4000, () => {
  console.log('Server is running on port 4000');
});