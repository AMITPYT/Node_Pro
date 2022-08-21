const express = require("express");
const router = express.Router();
const User = require('./schema');
// const bcrypt = require('bcryptjs');
// var jwt = require('jsonwebtoken');
// const { validationResult } = require('express-validator');
// const fetchuser = require('../middleware/fetchuser');

// const JWT_SECRET = 'Amitisagoodb$oy'
router.post('/registerdata', async (req, res) => {
    let success = false;

    try {
        // let user = await User.findOne({email: req.body.email})
        // if(user){
        //     return res.status(400).json({success, errors:"Sorry a user with this email already exists"});

        // }
        const userdata = new User({
            no: req.body.no,
            name: req.body.name,
            last: req.body.last,
            buy: req.body.buy,
            sell: req.body.sell,
            volume: req.body.volume,
            base_unit: req.body.base_unit,

        });
        success = true;
        const Createuser = await userdata.save();
        res.status(201).send(Createuser);
    

    } catch (error) {
        console.error(error.message);
        res.status(400).send(error);

    }

}   )

router.get('/getdata/:id', async (req, res) =>{
    try { 
        // user = req.params.id;
        const user = await User.findById(req.params.id)
        res.send(user) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error") 
    }
});
router.get('/getdata', async (req, res) =>{
    try { 
        // user = req.params.id;
        const user = await User.find()
        res.send(user) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error") 
    }
});


module.exports = router;