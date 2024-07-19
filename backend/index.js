import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/auth.routes.js';
import connectToDB from './db/mongoConnect.js';

const app=express();
const port=process.env.PORT ||5000;
app.use(cors());

dotenv.config();


app.get('/',(req,res)=>{
    res.send("Homepage");
});

app.use(express.json());
app.use('/api/auth', router)

app.listen(port,(req,res)=>{
    connectToDB();
    console.log(`App is listening on port ${port}`);
});