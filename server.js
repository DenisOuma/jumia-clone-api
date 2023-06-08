const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");

const connectDB = require("./config/db");
// loading the dotenv file
dotenv.config({ path: "./config/config.env" });

// connect to DB
connectDB();

// Load the routes
const products = require("./routes/productRoute");
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
	app.use(morgan("dev"));
}

// Moute routers
app.use("/api/v1/products", products);
const PORT = process.env.PORT || 5000;

app.listen(
	PORT,
	console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
	console.log(`Error: ${err.message}`.red);

	// cloese Server and exit process
	server.close(() => process.exit(1));
});
