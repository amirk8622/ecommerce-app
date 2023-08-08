import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from './routes/authRoute.js'
import categoryRoutes from './routes/categoryRoutes.js';
import cors from 'cors';
import ProductRoutes from './routes/ProductRoutes.js';
import path from "path";
dotenv.config();
connectDB();
const app = express();
//middleware
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')));
//routes
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes);
app.use('/api/v1/product',ProductRoutes);

app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,"./client/build/index.html"));
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, ()=> {
    console.log(`Server running on ${PORT}`.bgCyan.white)
})