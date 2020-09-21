const friendsArray = require ("../data/friends.json");
const fs = require("fs")
const router = require("express").Router();
// const "db info"
router.get("/friends", function (req, res) {
     console.log("hitting get route")
     res.json(friendsArray);
});

router.post("/friends", function (req, res){
    console.log("hitting post route")
    var newFriend = req.body;
    newFriend.scoreNumber = parseInt(newFriend.answer, 10)
    // console.log(newFriend);
    friendsArray.push(req.body)
    console.log(friendsArray)
    fs.writeFileSync("./db/friends.json", friendsArray, function(data){
        console.log("Writing File: " + data)
    })
})

module.exports=router
