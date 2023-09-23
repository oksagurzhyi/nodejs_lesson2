const { Router } = require("express");
const ctrl = require("../controllers/products.controller");

const router = Router();

router.post("/products", ctrl.createProduct);

router.get("/products", ctrl.getAllProducts);

router.get("/products/:id", ctrl.getProductById);

router.patch("/products/:id", ctrl.updateProductById);

router.delete("/products/:id", ctrl.deleteProductById);

module.exports = {
  router,
};
