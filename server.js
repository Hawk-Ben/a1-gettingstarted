const http = require('http'),
      fs   = require('fs'),
  path = require('path'),
  port = 3000

const server = http.createServer( function( request,response ) {
  switch( request.url ) {
    case '/':
      sendFile( response, 'index.html' )
      break
    case '/index.html':
      sendFile( response, 'index.html' )
      break
    case '/placidplace-congratulations-7600.gif':
      sendFile( response, 'placidplace-congratulations-7600.gif', 'image/gif' )
      break
    default:
      response.end( '404 Error: File Not Found' )
  }
})

server.listen( process.env.PORT || port )

const sendFile = function( response, filename, contentType = 'text/html' ) {
   fs.readFile( filename, function( err, content ) {
     if (err) {
       response.statusCode = 404
       response.end( '404 Error: File Not Found' )
       return
     }

     response.setHeader( 'Content-Type', contentType )
     response.end( content )
   })
}