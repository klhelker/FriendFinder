app.get("/api/friends", function (req, res) {
    return res.json(friendData);
});

app.post("/api/friends", function(req, res){
    var newFriend = req.body;
    console.log(newFriend);
})

