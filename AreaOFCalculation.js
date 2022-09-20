const { request, response } = require("express");
const express=require("express");
const app=express();
const PORT=3000;
const body_parse=require('body-parser');
app.use(body_parse.urlencoded({extended:false}));
app.use(body_parse.json());

app.get("/",(request,response)=>{
 response.sendFile(__dirname+"/index.html")
})

app.get("/circle",(request,response)=>{
    response.sendFile(__dirname+"/circle.html")
})

app.get("/triangle",(request,response)=>{
    response.sendFile(__dirname+"/triangle.html")
})

app.post("/triangle",(request,response)=>{
    const height=request.body.height;
    const base=request.body.base;
    const area=0.5*base*height;
    response.send(`<h1>Area of Triangle is ${area.toFixed(2)}</h1>`)
})

app.post("/circle",(request,response)=>{
    const radious=request.body.radious;
    const area=3.1416*radious*radious;
    response.send(`<h1>Area of Cicle is  ${area.toFixed(2)}</h1>`)
})
app.listen(PORT,()=>{
    console.log(`server is Running at ${PORT}`);
})