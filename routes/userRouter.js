const express = require("express");
const router = express.Router();
const {userRegister ,userLogin,logout} = require("../controllers/usersController");
const logger =require("../middlewares/logger");
const upload =require("../middlewares/upload");
const alreadyLoged =require("../middlewares/alreadyLoged");
const sendToken =require("../middlewares/sendToken");

router.get('/authentication',alreadyLoged,sendToken,(req,res)=>{const token = req.token;
    res.render("myaccount",{token})
  })




module.exports = router;
