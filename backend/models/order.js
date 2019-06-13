"use strict";
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    "Order",
    {
      total: DataTypes.FLOAT,
      email: DataTypes.STRING
    },
    {}
  );
  Order.associate = function(models) {
    Order.belongsToMany(models.Product, {
      through: "ProductOrder",
      as: "products",
      foreignKey: "order_id"
    });
  };
  return Order;
};
