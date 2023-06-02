// desc         Get all Products List
// @route       GET /api/v1/products
// @Access      Public
exports.getProducts = (req, res, next) => {
	res.status(200).json({ success: "true", msg: "Show All bootcamps" });
};

// desc         Add a New Product
// @route       GET /api/v1/products
// @Access      Private

exports.createProduct = (req, res, next) => {
	res.status(200).json({ success: "true", msg: "Add New Bootcamp Success" });
};
