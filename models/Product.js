const mongoose = require("mongoose");
const mongoosePaginate = require('mongoose-paginate')

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  description: String,
  stock: Number,
  brand: {
    type: String,
    enum: [
      "Apple",
      "Samsung",
      "OPPO",
      "Infinix",
      "Microsoft Surface",
      "Huawei",
      "HP Pavilion",
      "Impression of Acqua Di Gio",
      "Fog Scent Xpressio",
      "Royal_Mirage",
      "Al Munakh",
      "Kitchen Shelf",
      "Golden",
      "luxury palace",
      "LED Lights",
      "Flying Wooden",
      "Boho Decor",
      "Dry Rose",
      "fauji",
      "Baking Food Items",
      "Bake Parlor Big",
      "Lord - Al-Rehab",
      "Saaf & Khaas",
      "Fair & Clear",
      "ROREC White Rice",
      "Dermive",
      "Hemani Tea",
      "L'Oreal Paris",
    ],
  },
  category: {
    type: String,
    enum: [
      "smartphones",
      "laptops",
      "fragrances",
      "skincare",
      "groceries",
      "home-decoration",
      "furniture",
      "tops",
      "womens-dresses",
      "womens-shoes",
      "mens-shirts",
      "mens-shoes",
      "mens-watches",
      "womens-watches",
      "womens-bags",
      "womens-jewellery",
      "sunglasses",
      "automotive",
      "motorcycle",
      "lighting",
    ],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}).plugin(mongoosePaginate)

module.exports = mongoose.model("Product", ProductSchema);
