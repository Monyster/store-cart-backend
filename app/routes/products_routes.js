// products_routes.js
module.exports = function (app, db) {
    app.get("/products/McDonald", (req, res) => {

        db.collection("McDonald").find().toArray(function (err, results) {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send(results);
            }
        });
    });

    app.get("/products/KFC", (req, res) => {
        db.collection("KFC").find().toArray(function (err, results) {
            if (err) {
                res.send({ error: "An error has occurred" });
            } else {
                res.send(results);
            }
        });
    });
};
