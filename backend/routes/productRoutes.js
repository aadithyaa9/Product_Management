import express from 'express';
import { getAllProducts , createProduct , getParticularProduct,updateProduct,deleteProduct } from '../controllers/productController.js';

const router = express.Router();


router.get("/", getAllProducts);
router.post("/", createProduct);
router.get("/:id", getParticularProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);


export { router };