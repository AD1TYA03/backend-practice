const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    path: "/admin/add-product",
    page: "Add Product",
  });
};

const products = [];

exports.postAddProduct = (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
    const products = Product.fetchAll( products =>{
  res.render("shop", {
    prods: products,
    path: "/shop",
    page: "Shop",
    check: products.length > 0,
  });
});
};

exports.products = products;
