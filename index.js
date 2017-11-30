var express = require("express");
var app     = express();
var path    = require("path");
const PORT = process.env.PORT || 5000

app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.listen(PORT);

console.log("Running at Port ", PORT);