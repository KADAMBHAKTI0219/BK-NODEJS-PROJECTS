const http = require('node:http')
const fs=require('fs')
// const server = http.createServer((req,res)=>{
//     console.log(req.method,req.url)
//     if(req.method == 'GET' && req.url == '/home'){
//         res.end('<h1>WELCOME TO OUR HOME PAGE </h1>')
//     }
//     else if(req.method == 'GET' && req.url == '/about'){
//         res.end('<h1>This is our custom server using HTTP </h1>')
//     }
//     else if(req.method == 'GET' && req.url == '/getproductdata'){
//         fs.readFile('./db.json', 'utf-8', (err, data) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 const products = JSON.parse(data).products;
//                 res.end(JSON.stringify(products));
//             }
//         });
        
//     }
//     else if(req.method == 'GET' && req.url == '/user'){
//         fs.readFile('./db.json','utf-8',(err,data)=>{
//             if(err){
//                 console.log(err)
//             }else{
//                 const user = JSON.parse(data).user;
//                 res.end(JSON.stringify(user))
//             }
//         });
//     }
//     else{
//         res.end("<h1>Page Not Found</h1>");
//     }
// })
// server.listen(8080,()=>{
//     console.log('server is running on port 8080')
// })

    // http://localhost:8080

    const server = http.createServer((req,res)=>{
        console.log(req.method,req.url)
        switch(req.method == "GET"){
            case req.url == '/home':
                res.end('<h1>WELCOME TO OUR HOME PAGE </h1>');
               break;
            case req.url == '/about':
                res.end('<h1>This is our custom server using HTTP </h1>');
                break;
                case req.url == '/getproductdata':
                    fs.readFile('./db.json', 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err);
                        } else {
                            const products = JSON.parse(data).products;
                            res.end(JSON.stringify(products));
                        }
                    });
                break;
                case req.url =='/user':
                    fs.readFile('./db.json', 'utf-8', (err, data) => {
                        if (err) {
                            console.log(err);
                            } else {
                                const user = JSON.parse(data).user;
                                res.end(JSON.stringify(user));
                            }});
                            break;
                            default:
                                res.end("<h1>Page Not Found</h1>");

        }
    })
    server.listen(8080,()=>{
        console.log('server is running on port 8080')
    })

