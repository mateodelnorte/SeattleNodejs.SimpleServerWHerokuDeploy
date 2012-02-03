var express = require('express'),
    app = express.createServer();

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.logger());
    app.use(app.router);
});

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(parseInt(process.env.PORT) || 3000);
