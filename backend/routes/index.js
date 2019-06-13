var express = require("express");
var router = express.Router();
const productController = require("../controllers").product;
const orderController = require("../controllers").order;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/products", productController.list);
router.post(
  "/api/products/:productId/add-to-cart",
  productController.addToCart
);
router.post(
  "/api/products/:productId/remove-from-cart",
  productController.removeFromCart
);
router.get("/api/products/cart", productController.cart);
router.get("/api/orders", orderController.list);
router.post("/api/orders", orderController.createOrder);

module.exports = router;
