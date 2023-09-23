const { Product } = require("../models/products.model");

const createProduct = async (req, res) => {
  try {
    const { body } = req;
    const product = await Product.create(body);
    return res.status(201).json(product);
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.status(200).json(allProducts);
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedProduct = await Product.findByIdAndUpdate(id, body, {
      new: true,
    });

    return res.status(200).json(updatedProduct);
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    return res.status(200).json({
      msg: `Success with id ${id}`,
    });
  } catch (error) {
    return res.status(400).json({
      msg: error.message,
    });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
