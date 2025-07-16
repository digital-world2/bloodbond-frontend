const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const bloodRequestRoutes = require('./routes/bloodRequestRoutes');
const donorRoutes = require('./routes/donorRoutes');

//dot config
dotenv.config();

//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes
//1 test route
app.use("/api/v1/dashboard", require("./routes/dashboardRoutes"));
app.use('/api/v1/test', require('./routes/testRoutes'));
app.use('/api/v1/auth', require("./routes/authRoutes"));
app.use('/api/v1/inventory', require("./routes/inventoryRoutes"));
app.use('/api', userRoutes);
app.use("/api/v1/blood", bloodRequestRoutes);
app.use('/uploads', express.static('uploads'));
app.use('/api/v1/donors', donorRoutes);


//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT, () =>{
    console.log(`Node Server Running in ${process.env.DEV_MODE} mode on Port ${process.env.PORT}`.bgBlue.white);
}); 