var express = require("express");
var router = express.Router();
const productController = require("../controllers").product;

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/api/products", productController.list);

module.exports = router;
