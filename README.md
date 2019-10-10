# nodejsgame

a multiplayer browser game built using:
* https://expressjs.com/ - handles requests and responses on the server
* https://socket.io/ - to handle websocket communication
* https://www.pixijs.com/ - fast and powerful WebGL renderer

An authoritative server architecture means that state mutation take place **on the server**.
This alleviates the need for extensive cheat detection since players aren't the ones modifying state.

Along with the approach comes several common issues that this project seeks to solve:
* the back and forth nature of an authoritative server takes time. Therefor client-side animation must be independant.
* the variablity in timings can cause the client and server to go out of sync.
