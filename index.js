//after installing express we need to require it ot use it
const express = require('express');
//assigns to variable app
const app = express();
//app get will get data on main page /, pass on function with params
//required and response
app.get('/', (req, res) => {
  //sends it to the browser
  res.send("Hello");
});
//listens to port
//navigate to localhost 3000
// http://localhost:3000/
app.listen(3000, function(){
  console.log("server started on port 3000");
});
