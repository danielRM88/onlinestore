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
  }
};
