// order_routes.js
module.exports = function (app, db) {
  app.post("/orders", (req, res) => {
    const order = {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      address: req.body.address,
      orderList: req.body.orderList,
    };

    console.log(order);
    db.collection("orders").insertOne(order, (err, result) => {
      if (err) {
        res.send({ error: "An error has occurred" });
      } else {
        res.send({ orderId: `${result.insertedId}` });
      }
    });
  });
};
