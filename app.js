const http = require('http');

http.createServer(function(req,res){

	res.write('this is earl')
	res.end()
}
).listen(3001)

console.log("server started on port 3000")
