var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// var inputItem = $("<input type='dropdown' class='answer-button'>").attr("name", questions[q].id).attr("value", questions[q].answers[i])


var friendsArray = [
    {
        friendName: "Kristin",
        friendPhoto: "https://images.pexels.com/photos/556665/pexels-photo-556665.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        // friendResponse: 
        
    }
    
];

module.exports=friendsArray;

// {
//     "name":"Ahmed",
//     "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//     "scores":[
//         5,
//         1,
//         4,
//         4,
//         5,
//         1,
//         2,
//         5,
//         4,
//         1
//       ]
//   }
  