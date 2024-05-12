const { authRoutes } = require("./auth");
const { productRoutes } = require("./productRoutes");

const { categoryRoutes } = require("./categoryRoutes");

const{cartRoutes} = require("./cartRoutes")

const {brandRoutes} = require("./brandRoutes");
module.exports = {
  authRoutes,
  productRoutes,
  categoryRoutes,
  cartRoutes,
  brandRoutes,
};
