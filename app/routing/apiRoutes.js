const friendsArray = require ("../data/friends.json");
const router = require("express").Router();
// const "db info"
router.get("/friends", function (req, res) {
     console.log("hitting get route")
     res.json(friendsArray);
});

router.post("/friends", function (req, res, next){
    console.log("hitting post route")
    var newFriend = req.body;
    newFriend.push(req.body);
    console.log(newFriend);
})

module.exports=router
