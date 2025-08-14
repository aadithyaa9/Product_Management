export const getAllProducts = (req, res) => {
    console.log("Fetching all products");
    res.status(200).json({ message: "All products fetched successfully" });
}

export const createProduct = (req, res) => {
    console.log("Creating a new product", req.body);
    res.status(201).json({ message: "Product created successfully", product: req.body });
}