var fs=require('fs');

var http=require('http');

fs.mkdir('public',function(){
	console.log('Public Directory Made');
	
		fs.mkdir('./public/views',function(){
			console.log('Views Directory Made');
				
				fs.writeFile('./public/views/viewTextInBrowser.txt','Tanvi Rasam \n801149377',function(err){});
				console.log('File added');
				
				
				fs.readFile('./public/views/viewTextInBrowser.txt','utf8',function(err,data){
				console.log('data read from viewTextInBrowser');
						var server=http.createServer(function(req,res){
						
						res.writeHead(200,{'Content-Type': 'text/plain'});
						res.end(data);
	
						});
				server.listen(8080,'127.0.0.1');
				console.log('Now listening');
	
				});
	

	});
	
	
});
