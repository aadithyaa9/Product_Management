import { psql } from "../config/db.js";

export const getAllProducts = async(req, res) => {
    try {
        const productList = await psql
            `SELECT * FROM products ORDER BY created_at DESC`;
    
        if (productList.length === 0) {
            return res.status(404).json({ message: "" })
        }
        res.status(200).json(productList);
        console.log("Feteched all products");
    } catch (error) {
        console.error("Error Fetching Products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const createProduct = async(req, res) => {
    const { name, image, price } = req.body;


    if (!name || !image || !price) {
        return res.status(400).json({ message: "All fields are required" });
        console.log("Error: Missing required fields");
    }

    try {
        const newProduct = await psql`
            INSERT INTO products (name, link, Price)
            VALUES (${name}, ${image}, ${price})
            RETURNING *;
        `;

        res.status(201).json(newProduct);
        console.log("Product created successfully");
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }




}

export const getParticularProduct = async(req, res) => {
    const { id } = req.params;

    try {
        const product = await psql`
            SELECT * FROM products WHERE id = ${id}
        `;

        if (product.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json(product[0]);
        console.log("Fetched product with ID:", id);
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { name, image, price } = req.body;
    try {
        const updatedProduct = await
            psql`UPDATE products
            SET name = ${name}, link = ${image}, Price = ${price}
            WHERE id = ${id} returning *;`;
        if (updatedProduct.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        } 
        res.status(200).json(updatedProduct[0]);
        console.log("Product updated successfully:", updatedProduct[0]);    
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}
export const deleteProduct= async (req, res) => {
    const { id } = req.params;

    try {
        const deletedProduct = await psql`
            DELETE FROM products WHERE id = ${id} RETURNING *;
        `;

        if (deletedProduct.length === 0) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct[0] });
        console.log("Product deleted successfully:", deletedProduct[0]);
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}