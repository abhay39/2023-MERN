import express from 'express';

const app = express();

console.log("Hello world")

app.listen(3000,()=>{
    console.log("Server listening on 3000");
})