var express = require('express')
  , ENV = process.env['NODE_ENV'] || 'development'
  , config = require('./config')[ENV]
  , cluster = require('cluster')
  , gzip = require('connect-gzip')
  , app = express.createServer()
  , publicDir = __dirname + '/../client'
;


app.set('views', __dirname + '/views')
  .set('view options', { 'layout': false })
  .set('view engine', 'jade');


app.use(express.bodyParser())
   .use(express.cookieParser())
   .use(express.favicon())
   .use(gzip.gzip({ flags: '--best' }))
;

app.use(express.static(__dirname + '/../client'));
app.use(app.router);

// require all business logic
require('./lib')(app);

if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < 1; i++) {
    cluster.fork();
  }

  cluster.on('death', function(worker) {
    console.log('worker ' + worker.pid + ' died');
  });
} else {
  app.listen(3001, function () {
    var addr = app.address();
    console.log(('   app listening on http://' + addr.address + ':' + addr.port));
  });
}
