import request from "superagent";
var config = {
  serverUrl: "http://localhost:4500/api"
};

const server = config.serverUrl;

export function createOrderService(email, success, error) {
  request
    .post(server + "/orders")
    .set("Content-Type", "application/json")
    .send({ email: email })
    .end((err, res) => {
      if (err) {
        error(err);
      } else {
        const response = JSON.parse(res.text);
        success(response);
      }
    });
}

export function getOrdersService(success, error) {
  request
    .get(server + "/orders")
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
