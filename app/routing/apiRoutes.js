const friendData = require ("../data");
const router = require("express").Router();
// const "db info"
router.get("/friends", function (req, res) {
    return res.json();
});

router.post("/friends", function(req, res){
    var newFriend = req.body;
    console.log(newFriend);
})

module.exports=router
