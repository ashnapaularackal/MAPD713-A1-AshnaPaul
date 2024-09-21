import express from  "express";

//Create object of express
const app  = express();
//interseptor
app.use(express.json());
// port number on which you want to run the application
const port = 5000;
var getcount =0;
var postcount =0;

app.get('/products',(req,res)=>
{
    getcount++;
    res.json({"key":" products GET: received request"})
    console.log("products GET: received request")
    console.log(`Processed Request Count--> Get:${getcount}`)
}
)

app.post('/products',(req,res)=>{
    postcount++;  
    const {productId,name,price,quantity}  = req.body;      
    res.send("done");
    console.log("products POST: sending response")
    console.log(`Processed Request Count-->Post:${postcount}`)

})

//port binding
app.listen(port,()=>{
    console.log(`Server is listening at http://127.0.0.1:5000`);
})

