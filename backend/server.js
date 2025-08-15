import express, { Router } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';
import { psql } from './config/db.js';
import { router } from './routes/productRoutes.js';
import req from 'express/lib/request.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());

app.use( async(req, res, next) => { 
    try {
        const decision = await detect.protect(req, {
            requested:1
        });

        if (decision.isBlocked) {
            if (decision.reason === "BOT") {
                return res.status(403).json({ message: "Access denied: Bot detected" });
            }
            if (decision.reason === "RATE_LIMIT") {
                return res.status(429).json({ message: "Too many requests, please try again later" });
            }   
            if (decision.reason === "SHIELD") {
                return res.status(403).json({ message: "Access denied: Shield protection active" });
            }
            else {
                return res.status(403).json({ message: "Access denied: Unknown reason" });
            }
        } 
    }
    catch(error) {
        console.error("Error in middleware:", error);
        res.status(500).json({ message: "Internal Server Error" });
        next(error);
    }
})

app.use("/api/products", router);

async function dbInit() {
    try {
        await psql`
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            link VARCHAR(255) NOT NULL,
            Price DECIMAL NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        `;
        console.log("Database connected and table created successfully");
    } catch(error) {
        console.log("Database connection failed:", error);
        process.exit(1);
    }
}


dbInit().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });

});



