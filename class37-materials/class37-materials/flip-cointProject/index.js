import http from 'http';
import fs from 'fs';
import url from 'url'
import querystring from 'querystring';

const server=http.createServer((req,res)=>{
    
    const page=url.parse(req.url).pathname;

    if(page=== '/'){
        fs.readFile('index.html',function(err,data){
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        })
    }
    else if(page==='/api'){
        const randomNo=Math.random();
        res.writeHead(200,{'Content-Type':'application/json'});
        const objToJson={
            no:randomNo,
        }
        res.end(JSON.stringify(objToJson));

    }
    else if(page==='/css/style.css'){
        fs.readFile('./css/style.css',function(err,data){
            res.writeHead(200,{"Content-Type":'text/css'})
            res.write(data);
            res.end();
        })
    }
    else if(page==='/js/script.js'){
        fs.readFile('./js/script.js',function(err,data){
            res.writeHead(200,{'Content-Type':'text/javascript'});
            res.write(data);
            res.end();
        })
    }
    else{
        console.log('Page not found');
    }
})

server.listen(8000);