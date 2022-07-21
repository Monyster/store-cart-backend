
const orderRoutes = require('./order_routes');
const productsRoutes = require('./products_routes');

module.exports = function (app, db) {
    orderRoutes(app, db);
    productsRoutes(app, db);
};