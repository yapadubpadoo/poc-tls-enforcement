var tls = require("tls");
var tlsSocket = new tls.TLSSocket();
console.log(tlsSocket.getProtocol());
