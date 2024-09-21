import express from  "express";

//Create object of express
const app  = express();
//interseptor
app.use(express.json());
// port number on which you want to run the application
const port = 5000;
// 2 request counters, one for GET requests and the other for POST requests
var getcount =0;
var postcount =0;

let datastore ={
    users:[]
}

app.get('/products',(req,res)=>
{
    getcount++;
    // return a list of all products information as a response to GET request
    res.json(datastore.users);
    //log request information
    console.log("products GET: received request")
    // log request counters values every request:
    console.log(`Processed Request Count--> Get:${getcount}`)
}
)

app.post('/products',(req,res)=>{
    postcount++;  
    //  log response information
    console.log("products POST: sending response")
    // log request counters values every request:
    console.log(`Processed Request Count-->Post:${postcount}`)
    const userData =req.body;
    if(!userData || !userData.productId || !userData.name || !userData.price || !userData.quantity){

    return res.status(400).json({error:"Invalid Data"})
}
//store in-memory json payload received in POST request 
datastore.users.push(userData);
res.status(201).json(userData);

})


//port binding
app.listen(port,()=>{

//     logging the information on start-up:
// - about the server uri (IP address and port) and endpoints information

    console.log(`Server is listening at http://127.0.0.1:5000`);
})

