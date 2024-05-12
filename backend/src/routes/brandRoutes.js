const express = require("express");
const temp = require("../config/db.config");
const upload = require("../utils/upload");
const app = express();
const setUploadPath = require("../middleware/upload_middleware");
const verifyToken = require("../utils/verify_token");

const {addBrand}  = require("../controller/brandController");


const routes = express.Router();


routes.post(
  "/add_brand",
  verifyToken.verifyToken,
  setUploadPath.setUploadPath("./public/images/brand"),
  upload.single("brandImage"),
  addBrand,

);










module.exports = {
  brandRoutes: routes,
};
