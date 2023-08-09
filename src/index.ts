import express from 'express';
import {Request,Response} from "express";
import serverless from "serverless-http";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req:Request, res:Response) => {
    res.send('Hello world from dev branch for the sake of GOD!');
});

app.listen(5006, () => {
    console.log('Server is listening on port 5006');
});

module.exports.handler = serverless(app);