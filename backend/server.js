import express from 'express';
import cors from 'cors';
import reviews from './api/reviews.router.js';


const app = express()

// prevent cors error 
app.use(cors())

// allow json data
app.use(express.json())

app.use("/api/v1/reviews", reviews)

app.use("*", (req, res) => res.status(404).json({error: "Not Found"}))


export default app;

