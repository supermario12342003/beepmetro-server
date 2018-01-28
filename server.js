/*
* @Author: Mengwei Choong
* @Date:   2018-01-27 10:32:55
* @Last Modified by:   Mengwei Choong
* @Last Modified time: 2018-01-28 11:53:12
*/

// server.js
const express = require('express');
var dist = __dirname + "/public";

const app = express()
.use(express.static(dist));

server = app.listen(process.env.PORT || 8080, () => {
  console.log("listening... ");
});

/*
route to frontend
*/
app.get('*', (req, res) => res
  .sendFile(__dirname + "/public/index.html"));
