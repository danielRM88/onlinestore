const Order = require("../models").Order;
const Product = require("../models").Product;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  list(req, res) {
    return Order.findAll({
      order: [["createdAt", "DESC"]]
    })
      .then(orders => res.status(200).send({ orders }))
      .catch(error => {
        res.status(400).send(error);
      });
  },
  async createOrder(req, res) {
    let total = 0;
    products = await Product.findAll({
      where: { cart: true }
    });
    await products.forEach(product => {
      total += product.price;
    });

    console.log("TOTAL: " + total);
    if (total === 0) {
      return res.status(400).send({ message: "Cart is empty" });
    }

    order = await Order.create({
      email: req.body.email,
      total
    });

    await order.addProducts(products);

    await products.forEach(p => {
      p.update({ cart: false });
    });

    return res.status(201).send({ message: "Order created successfully" });
  },
  removeFromCart(req, res) {
    return Product.update(
      {
        cart: false
      },
      { where: { id: req.params.productId } }
    )
      .then(product =>
        res.status(201).send({ message: "Product removed from cart" })
      )
      .catch(error => res.status(400).send(error));
  }
};
