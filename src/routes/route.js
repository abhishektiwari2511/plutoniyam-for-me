const express = require('express');
const router = express.Router();

const UserController= require("../controllers/userController")

const commonMW = require ("../middlewares/commonMiddlewares")
const ProductController = require("../controllers/productController")
const orderController = require ("../controllers/orderController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post("/createProduct",ProductController.createProduct)
router.post("/createUse",commonMW.mid2,UserController.createUse)
router.post("/createOrder",commonMW.mid2,orderController.createOrder)

module.exports = router;