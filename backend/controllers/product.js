const Product = require("../models").Product;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

module.exports = {
  list(req, res) {
    let whereClause = {};
    const { search } = req.query;

    if (search) {
      whereClause = {
        [Op.or]: [
          {
            title: {
              [Op.like]: `%${search}%`
            }
          },
          {
            description: {
              [Op.like]: `%${search}%`
            }
          }
        ]
      };
    }

    return Product.findAll({
      where: whereClause,
      order: [["title", "DESC"]]
    })
      .then(products => res.status(200).send({ products }))
      .catch(error => {
        res.status(400).send(error);
      });
  },
  cart(req, res) {
    return Product.findAll({
      where: { cart: true },
      order: [["title", "DESC"]]
    })
      .then(products => res.status(200).send({ products }))
      .catch(error => {
        res.status(400).send(error);
      });
  },
  addToCart(req, res) {
    return Product.update(
      {
        cart: true
      },
      { where: { id: req.params.productId } }
    )
      .then(product =>
        res.status(201).send({ message: "Product added to cart" })
      )
      .catch(error => res.status(400).send(error));
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
