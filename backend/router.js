const express = require("express");
const router = express.Router();
const User = require('./schema');


router.post('/registerdata', async (req, res) => {
    let success = false;

    try {
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
        const user = await User.find()
        res.send(user) 
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error") 
    }
});
module.exports = router;