import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.get("/", (req, res) => {
    res.send("First Setup Complete");
    
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});