const randomNumber = require("../utils/const");

const brand = require("../models/new_db_models/brand");
const Images = require("../models/new_db_models/image");

const cache = require("node-cache");
const { error } = require("console");

/* ********************/
// Add
/* ********************/
async function addBrand(req, res) {
  console.log(randomNumber.generateId());

  const brandName = req.body.name;

  const brandId = randomNumber.generateId();
  const rating = req.body.rating;
  const description = req.body.description;

  const image = req.file;
  try {
    const brandDetails = await brand.findOne({ name: brandName });
    if (!brandDetails) {
      brand.create({
        id: brandId,
        name: brandName,
        rating: rating,

        description: description,
      });
      const imageUrl = `http://localhost:4000/public/images/brand${req.file.filename}`;

      await Images.create({
        id: brandId,
        images_url: imageUrl,
      });

      res.send({
        status: true,
        message: "given brand is added",
      });
    } else {
      res.send({
        status: false,
        message: "Given brand is already exist",
      });
    }
  } catch (e) {
    console.log("cause the error", e);

    res.send({
      error,
    });
    console.log(e);
  }
}

/// get brand method
async function getBrand(req, res) {
  const brandId = req.brandId;

  try {
    const brandDetails = await Brand.findOne({ id: brandId });

    if (brandDetails) {
      res.send(brandDetails);
    } else {
      res.send({
        status: false,
        message: "Given brand does not exist",
      });
    }
  } catch (error) {
    console.log("Error retrieving brand:", error);
    res.send({
      status: false,
      message: "Error retrieving brand",
    });
  }
}

module.exports = {
  addBrand,
  getBrand,
};
