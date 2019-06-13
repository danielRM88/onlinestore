import request from "superagent";
var config = {
  serverUrl: "http://localhost:4500"
};

const server = config.serverUrl;

export function getProductsService(search, page, success, error) {
  request
    .get("google.com")
    .set("Content-Type", "application/json")
    .query({ search: search, page: page })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        // const response = JSON.parse(res.text);
        // success(response);
        success({
          products: [
            {
              title: "Nintendo Switch",
              description: "Nintendo Hybrid Gaming Console",
              img:
                "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5670/5670100_sd.jpg"
            },
            {
              title: "Playstation 4",
              description: "Sonys Popular Gaming Console",
              img:
                "https://rukminim1.flixcart.com/image/704/704/jddesnk0/gamingconsole/n/z/t/1-playstation-4-ps4-slim-sony-dual-stock-4-controller-original-imaf2an4fvwy6ssm.jpeg?q=70"
            }
          ]
        });
      }
    });
  // request
  //   .get(server + "/products")
  //   .set("Content-Type", "application/json")
  //   .query({ page: page })
  //   .end((err, res) => {
  //     if (err) {
  //       error(err);
  //     } else {
  //       const response = JSON.parse(res.text);
  //       success(response);
  //     }
  //   });
}

export function getCartService(page, success, error) {
  request
    .get("google.com")
    .set("Content-Type", "application/json")
    .query({ page: page })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        // const response = JSON.parse(res.text);
        // success(response);
        success({
          products: [
            {
              title: "Nintendo Switch",
              description: "Nintendo Hybrid Gaming Console",
              price: 300,
              quantity: 2,
              img:
                "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5670/5670100_sd.jpg"
            },
            {
              title: "Playstation 4",
              description: "Sonys Popular Gaming Console",
              price: 250,
              quantity: 1,
              img:
                "https://rukminim1.flixcart.com/image/704/704/jddesnk0/gamingconsole/n/z/t/1-playstation-4-ps4-slim-sony-dual-stock-4-controller-original-imaf2an4fvwy6ssm.jpeg?q=70"
            }
          ]
        });
      }
    });
}

export function addToCartService(page, success, error) {
  request
    .get("google.com")
    .set("Content-Type", "application/json")
    .query({ page: page })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        // const response = JSON.parse(res.text);
        // success(response);
        success({
          message: "Product added to cart"
        });
      }
    });
}

export function removeFromCartService(page, success, error) {
  request
    .get("google.com")
    .set("Content-Type", "application/json")
    .query({ page: page })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        // const response = JSON.parse(res.text);
        // success(response);
        success({
          message: "Product removed from cart"
        });
      }
    });
}
