var httpServer = new HTTPServer(8080);

httpServer.addEventListener('request', function(evt) {
  var request  = evt.request;
  var response = evt.response;
  console.log(evt);
  response.send("Awesome");
});

window.addEventListener('DOMContentLoaded', function(evt) { 
    console.log('starting');
  httpServer.start();
});

window.addEventListener('beforeunload', function(evt) {
    console.log('closing');
  httpServer.stop();
});
