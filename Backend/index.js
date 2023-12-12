import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import authRoute from './Routes/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const corsOption = {
  origin: true,
};
app.get('/', (req, res) => {
  res.send('APi is Working');
});

// database connection
mongoose.set('strictQuery', false);
const DB = process.env.MONGO_URL;
const connectDB = async () => {
  try {
    await mongoose.connect(DB);
    console.log('MOngoDB database is connected');
  } catch (err) {
    console.log('MOngoDB database is connected failed');
  }
};

// middleware
app.use(express.json());
app.use(cookieParser);
app.use(cors(corsOption));
app.use(morgan('dev'));
app.use('/api/v1/auth', authRoute);
app.listen(port, () => {
  connectDB();
  console.log('server is running on port ' + port);
});
