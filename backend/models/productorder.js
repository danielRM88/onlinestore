'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductOrder = sequelize.define('ProductOrder', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {});
  ProductOrder.associate = function(models) {
    // associations can be defined here
  };
  return ProductOrder;
};