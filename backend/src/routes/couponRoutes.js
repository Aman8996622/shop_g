const express = require("express");
const temp = require("../config/db.config");

const upload = require("../utils/upload");

const app = express();

const routes = express.Router();

const { addCoupon } = require("../controller/couponController");

routes.post("/add_coupon", addCoupon);

module.exports = {
  couponRoutes: routes,
};
