var http=require('http');

var fs=require('fs');

var server=http.createServer(function(req,res){
	console.log('Request made with url'+ req.url);
	
	if(req.url==='/contact'){
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream('./Views/contact.html', 'utf-8').pipe(res);}
	
	else if(req.url==='/about'){
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream('./Views/about.html', 'utf-8').pipe(res);}
	
	
	else{
		res.writeHead(200,{'Content-Type': 'text/html'});
		fs.createReadStream('./Views/404.html', 'utf-8').pipe(res);}
	
	
	
});

server.listen(8080,'127.0.0.1');
console.log('Now listening');
