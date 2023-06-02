const express = require("express");
const router = express.Router();

const {
	getProducts,
	createProduct,
} = require("../controllers/ProductsControllers");

router.route("/").get(getProducts).post(createProduct);

module.exports = router;
