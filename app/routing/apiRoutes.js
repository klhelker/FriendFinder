const friendsArray = require ("../data/friends.js");
const router = require("express").Router();
// const "db info"
router.get("/api/friends", function (req, res) {
  
     res.json(friendsArray);
});

router.post("/api/friends", function (req, res){
    var newFriend = req.body;
    newFriend.push(req.body);
    console.log(newFriend);
})

module.exports=router
