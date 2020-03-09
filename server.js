const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var PORT = process.env.PORT || 8080
app.get('/', function (req, res) {
  res.send('Hello World')
})
 


app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
});



app.listen(PORT, function(){
    console.log("app listening on " + PORT)
});