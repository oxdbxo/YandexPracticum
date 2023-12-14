let http = require( "http" ),
  pathUtils = require( "path" ),
  express = require( "express" ),
  app = express(),
  port = 3000,
  appDir = pathUtils.resolve( __dirname, "../dist" );

app.use( express.static( appDir ) );

app.get( "*", function( req, res ) {
  res.sendFile( pathUtils.resolve( appDir, "index.html" ) );
} );

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
