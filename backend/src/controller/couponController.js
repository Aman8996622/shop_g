const randomNumber = require("../utils/const");

const Coupon = require("../models/new_db_models/coupon");

async function addCoupon(req, res) {
  const id = randomNumber.generateId();
  const couponCode = req.code;

  const productId = req.productId;
  const discount = req.discount;
  const name = req.name;
  



  try {
    const coupon = Coupon.findOne({
      code: couponCode,
    });

    if (!coupon) {
      const couponDetails = Coupon.create({
        id: id,
        name: name,
        productId: productId,
        code: couponCode,
        discount: discount,
      });
      console.log(couponDetails);

      res.send({
        status: true,
        message: "your coupon has been updated sucessfully",
      });
    } else {
      res.send({
        status: true,
        message: "your coupon already exist",
      });
    }
  } catch (error) {
    res.send({
      error,
    });

    console.log(error);
  }
}

async function deleteCoupon(req, res) {
  const id = req.id;

  try {
    const coupon = Coupon.findOne({
      id: id,
    });

    if (!coupon) {
      Coupon.deleteOne({
        id: id,
      });
      console.log(couponDetails);

      res.send({
        status: true,
        message: "your coupon has been updated sucessfully",
      });
    } else {
      res.send({
        status: true,
        message: "your coupon already exist",
      });
    }
  } catch (error) {
    res.send({
      error,
    });

    console.log(error);
  }
}

module.exports = {
  addCoupon,
};
