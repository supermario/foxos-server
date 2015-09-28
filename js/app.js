var httpServer = new HTTPServer(8080);

httpServer.addEventListener('request', function(evt) {
  evt.response.send("Awesome!")
})

window.addEventListener('DOMContentLoaded', function() { 
  httpServer.start()
})

window.addEventListener('beforeunload', function() {
  httpServer.stop()
})
