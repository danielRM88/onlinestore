"use strict";
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      image: DataTypes.STRING,
      price: DataTypes.FLOAT,
      cart: DataTypes.BOOLEAN
    },
    {}
  );
  Product.associate = function(models) {
    Product.belongsToMany(models.Order, {
      through: "ProductOrder",
      as: "orders",
      foreignKey: "product_id"
    });
  };
  return Product;
};
