var express = require('express');

var app = express();

app.set('views', './views');

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.on('stormpath.ready',function(){
  console.log('Stormpath Ready');
});

app.listen(3000);
