const Product = require("../models/Product");

/* const getAllProductsStatic = async (req, res) => {
  const products = await Product.find({
    price: { $gt: 13 },
    rating: { $gte: 4.5 },
  })
    .skip(4)
    .limit(10);
  res.status(200).json({ products, nbProducts: products.length });
}; */

const getAllProducts = async (req, res) => {
  const { featured, brand, title, category, sort, select, numericFilters } =
    req.query;

  const queryObject = {};

  if (brand) {
    queryObject.brand = { $regex: brand, $options: "i" };
  }

  if (featured) {
    /* if (featured === true) {
      queryObject.featured = true
    } else {
      queryObject.featured = false
    } */

    queryObject.featured = featured;
    // console.log(req.query.featured);
    // console.log(queryObject.featured);
  }

  if (title) {
    queryObject.title = { $regex: title, $options: "i" };
  }

  if (category) {
    queryObject.category = { $regex: category };
  }

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const pattern = /\b(<|>|>=|=|<=)\b/g;
    const filters = numericFilters.replace(
      pattern,
      (match) => `-${operatorMap[match]}-`
    );
    // console.log(filters);
    const options = ["price", "stock", "rating"];
    filters.split(",").forEach((element) => {
      const [field, operator, value] = element.split("-");
      // console.log(field, operator, value);
      if (options.includes(field)) {
        queryObject[field] = { [operator]: Number(value) };
      }
    });
  }
  console.log(queryObject);
  let result = Product.find(queryObject);

  if (sort) {
    const sortParams = sort.split(",").join(" ");
    result.sort(sortParams);
  } else {
    result.sort("createdAt");
  }

  if (select) {
    const fields = select.split(",").join(" ");
    result.select(fields);
  }

  // pagination:
  // using the 'mongoose-paginate' package - attempt failed

  /*   const pageNumber = req.query.page || 1;
  const limit = req.query.limit || 10;

  Product.paginate(
    queryObject,
    { page: pageNumber, limit: limit, sort: req.query.sort ? req.query.sort.split(',').join(" ") : "createdAt"},
     (err, result) => {
      if (err) {
        return res
          .status(500)
          .json({ msg: "Something went wrong. Try again later" });
      }

      const products = result;
      // const { docs, total, limit, page, pages } = presult
      return res.json({ products, nbProducts: products.length });
    }
  );
 */

  // manually
  const limit = Number(req.query.limit) || 10;
  const pageNumber = Number(req.query.page) || 1; // Get the current page number from the query parameters or default to page 1
  const skip = (pageNumber - 1) * limit;
  result.skip(skip).limit(limit);

  // console.log(queryObject);
  const products = await result;

  res.status(200).json({ products, nbProducts: products.length });
};

module.exports = {
  getAllProducts,
};
