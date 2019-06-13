import request from "superagent";
var config = {
  serverUrl: "http://localhost:4500/api"
};

const server = config.serverUrl;

export function getProductsService(search, page, success, error) {
  request
    .get(server + "/products")
    .set("Content-Type", "application/json")
    .query({ page: page })
    .query({ search: search })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    });
}

export function getCartService(page, success, error) {
  request
    .get(server + "/products/cart")
    .set("Content-Type", "application/json")
    .query({ page: page })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    });
}

export function addToCartService(productId, success, error) {
  request
    .post(server + "/products/" + productId + "/add-to-cart")
    .set("Content-Type", "application/json")
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    });
}

export function removeFromCartService(productId, success, error) {
  request
    .post(server + "/products/" + productId + "/remove-from-cart")
    .set("Content-Type", "application/json")
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    });
}
