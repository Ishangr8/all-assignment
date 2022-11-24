const http = require('http');
const port = 5555;
const fs = require('fs');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('<html> <body style="background:pink"> <h1 style="color:orange;"> CRUD OPERATIONS </h1> <hr><a style="margin:14px; color:yellow;" href="/createFile" ><h1>Create File</h1></a> <a href="/readFile" style="margin:14px; color:yellow;"><h1>Read File</h1></a> <a href="/updateFile" style=" color:yellow;"><h1>Update File</h1></a> <a href="/deleteFile" style=" color:yellow;"><h1>Delete File</h1></a><hr></body></html>')
        res.end();
    }
    else if(req.url === '/createFile'){
        if(fs.existsSync("neosoft.txt")){
            res.end("<h1>File is created</h1>");
        }
        else {
            fs.writeFile("neosoft.txt","<h1>Hello peeps NeoSoft welcomes you to their world!</h1>", (err) => {
                if (err) throw err;
                res.end('<h1>File Created</h1>');
            })
        }
    }
    else if(req.url === '/readFile'){
        if(fs.existsSync('neosoft.txt')){
            let data = fs.readFileSync("neosoft.txt");
            res.end(data.toString());
        }
        else {
            res.end("<h1>File does not exist</h1>");
        }
    }
    else if(req.url === '/updateFile'){
        if(fs.existsSync('neosoft.txt')){
            fs.appendFile("neosoft.txt", "<h1>Oops data got changed try something else</h1>", (err) => {
                if(err) throw err;
                else res.end("<h1>File is appended</h1>");
            })
        }
        else {
            res.end("<h1> File does not exist </h1>");
        }
    }
    else if(req.url === '/deleteFile'){
        if(fs.existsSync('neosoft.txt')){
            fs.unlink('neosoft.txt', err => {
                if (err) throw err;
                else res.end("<h1>File is deleted</h1>");
            });
        }
        else {
            res.end("<h1>File does not exist</h1>");
        }
    }
    else {
        res.end("<h1> 404 Page Not Found </h1>")
    }
})

server.listen(port, err => {
    if(err) throw err;
    else console.log(`Server is work on ${port}`);
})