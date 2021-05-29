const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

// product folder models............
//.....category folder models............
db.product_category = require("./models/product/category/product_category.model");
db.product_child_category = require("./models/product/category/product_child_category.model");
db.product_sub_category = require("./models/product/category/product_sub_category.model");
db.product_offer = require("./models/product/product_offer.model");
// db.product_rating = require("./models/product/product_rating.model");
// db.product_review = require("./models/product/product_review.model");;
db.product = require("./models/product/product.model");

// shop folder models............
db.shop_level = require("./models/shop/shop_level.model");
db.shop_plan = require("./models/shop/shop_plan.model");
// db.shop_rating = require("./models/shop/shop_rating.model");
// db.shop_review = require("./models/shop/shop_review.model");
// db.shop_setting = require("./models/shop/shop_setting.model");
db.shop = require("./models/shop/shop.model");

// user folder models............
// db.user_level = require("./models/user/user_level.model");
// db.user_setting = require("./models/user/user_setting.model");
// db.user_wishlist = require("./models/user/user_wishlist.model");
db.user = require("./models/user/user.model");

// models folder models...........
db.address = require("./models/address.model");
// db.advertisement = require("./models/advertisement.model");
// db.banner = require("./models/banner.model");
db.brand = require("./models/brand.model");
db.cart = require("./models/cart.model");
db.city = require("./models/city.model");
db.contact = require("./models/contact.model");
db.country = require("./models/country.model");
db.currency = require("./models/currency.model");
db.order = require("./models/order.model");
// db.payment = require("./models/payment.model");
db.role = require("./models/role.model");
db.social_link = require("./models/social_link.model");
db.state = require("./models/state.model");

db.ROLES = ["user", "admin", "vender"];

module.exports = db;
