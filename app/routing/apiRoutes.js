const friendData = require ("../data/friends");
const router = require("express").Router();
// const "db info"
router.get("/api/friends", function (req, res) {
    return res.json(friendData);
});

router.post("/api/friends", function(req, res){
    var newFriend = req.body;
    console.log(newFriend);
})

router.get("app/data/friends", function(req,res){
    
})
module.exports=router
