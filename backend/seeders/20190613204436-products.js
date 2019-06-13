"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Products",
      [
        {
          title: "Nintendo Switch",
          description: "Nintendo Hybrid Console",
          image:
            "https://target.scene7.com/is/image/Target/GUEST_869df002-c5e0-4b9f-9636-56332268c6cf?wid=488&hei=488&fmt=pjpeg",
          price: 300,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Unicorns Food Unix",
          description: "Your number one choice for all unicorn nutrition",
          image:
            "http://www.chefbenwa.com/wp-content/uploads//Unicorn_Meat_FT.jpg",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Illegal Plutonium",
          description: "Handle with care. Highly radioactive",
          image: "https://i.stack.imgur.com/G08IW.jpg",
          price: 250,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Blood Diamond",
          description: "You should be ashamed of yourself",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBTx4ql-7cUEesJLuh49kvoXgdYCba_7kD0RXjMPct7GmjkVB2",
          price: 1000,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Products", null, {});
  }
};
