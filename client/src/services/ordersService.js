import request from "superagent";
var config = {
  serverUrl: "http://localhost:4500"
};

const server = config.serverUrl;

export function createOrderService(email, success, error) {
  request
    .post("google.com")
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
