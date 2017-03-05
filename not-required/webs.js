var WebSocket = require('faye-websocket')  
    , http = require('http');  
  
var server = http.createServer(handler);  
  
server.addListener('upgrade', function(request, socket, head) {  
    var ws = new WebSocket(request, socket, head);  
    // ...  
});  
  
function handler (req, res) {  
    // ...  
}  
  
server.listen(process.env.PORT || 8000);  
