import express from 'express';

const port = process.env.PORT || 3000;
const app = express();

app.get("/",(req,res)=>{
    res.send("it works")
})


app.listen(port,()=>{
console.log(`server is running on port ${port}`)
});