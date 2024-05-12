// 49.36.239.60/32

const randomNumber = require("../utils/const");

const Category = require("../models/new_db_models/main_category");

const SubCategories = require("../models/new_db_models/sub_category");

const Images = require("../models/new_db_models/image");

const cache = require("node-cache");
const { indexOf } = require("lodash");

async function addMainCategory(req, res) {
  console.log(randomNumber.generateId());
  const categoryName = req.body.name;
  const categoryId = randomNumber.generateId();
  const description = req.description;

  const subCategories = JSON.parse(req.body.subCate)

  const imageFile = req.files.CategoryImage;

  // const firstObject  = imageFile[0];

  try {
    const category = await Category.findOne({ name: categoryName });
    if (!category) {
      const userDetials = await Category.create({
        id: categoryId,
      
        name: categoryName,
        description: description,
        isDeleted: 0,
        
      });

      

      
      const imageUrl = `http://localhost:4000/public/images/categories/${imageFile[0].filename}`;

      await Images.create({
        id: categoryId,
        images_url: imageUrl,
      });

      // await addSubCategory(req.body, subCategories, categoryId, req.files.subCategoryImage);
      await addSubCategory({
        body: req.body,
        subCategories: subCategories,
        mainCategoryId: categoryId,
        files: req.files.subCategoryImage,
      });

      res.send({
        mainCategoryId: categoryId,
        message: "Given category is add successfully",
      });
    } else {
      res.send({
        message: "give data is already exist please ",
      });
    }
  } catch (error) {
    console.log(error);
  }
}


// async function  addBrand({
   
// }){
//     try {
      
//     } catch ( 

//     ) {
      
//     }
  


// }



/* ********************/
// Add Sub category
/* ********************/

async function addSubCategory({ body, subCategories, mainCategoryId, files }) {
  try {
    // this list holds the image list
    const ImageFiles = files;
    // this list holds the reqFileList
    let reqFileList = [];

    const listCategories = subCategories.category;

    for (var item of listCategories) {
      const index = listCategories.indexOf(item);

      const subCategoriesId = randomNumber.generateId();

      const category = await SubCategories.findOne({
        name: item.name,
      });
      if (!category) {
        const userDetials = await SubCategories.create({
          id: subCategoriesId,
          name: item.name,
          main_category_id: mainCategoryId,
          description: item.description,
          isDeleted: 0,
        });
        const imageUrl = `http://localhost:4000/public/images/subCategories/${ImageFiles[index].filename}`;
        if (index < ImageFiles.length)
          reqFileList.push({
            id: subCategoriesId,
            images_url: imageUrl,
          });
      } else {
        console.log("given sub Categories is present in data");
      }
    }
    await Images.insertMany(reqFileList);
  } catch (e) {
    console.log(e);
  }
}


/* ********************/
// Delete Category
/* ********************/
async function deleteCategory(req, res) {
  const categoryId = req.categoryId;

  try {
    const product = Category.update(
      { isDeleted: 1 },
      {
        id: categoryId,
      }
    );

    if (product) {
      res.send({
        message: "Given  category  is deleted",
      });
    } else {
    }
  } catch (error) {}
}

async function getCategory(req, res) {
  const categoryId = req.categoryId;

  const category = Category.findAll();

  try {
    if (product) {
      res.send({
        category: category,
        status: 1,
        message: "All the deleted",
      });
    } else {
    }
  } catch (error) {}
}

module.exports = {
  addMainCategory,
  deleteCategory,
  addSubCategory,
  getCategory,
};
