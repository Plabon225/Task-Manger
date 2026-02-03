// Basic Library Import
import express from 'express';
import router from './src/routes/api.js'
import bodyParser from 'body-parser';

// Security Middleware Import
import rateLimit from "express-rate-limit";
import helmet from 'helmet';
import hpp from 'hpp';
import cors from 'cors';

// Database Import
import mongoose from 'mongoose';

import {DATABASE_URL, REQUEST_NUMBER, REQUEST_TIME} from "./src/config/config.js";

const app = express();

// Security Middleware Implement
app.use(cors());
app.use(hpp());
app.use(helmet());

// BodyParser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({
    windowMs: REQUEST_TIME, max: REQUEST_NUMBER
})
app.use(limiter);

// Mongo DB Database Connection
mongoose.connect(DATABASE_URL).then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.error("Not connected to MongoDB"+err);
})

// Routing Implement
app.use("/api", router);

//Undefine Route Implement
app.use((req, res) => {
    res.status(404).json({status:"fail",data:"Not Found"});
})

export default app;
