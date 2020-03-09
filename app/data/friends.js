var express = require("express");
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var friendData = [
    {
        routeName: "tables",
        customerName: "Kristin",
        customerEmail: "kristin@email.com",
        phoneNumber: "123-123-1234",
        customerID: "rezzie1"
    },
    {
        routeName: "tables",
        customerName: "Hallie",
        customerEmail: "hallie@email.com",
        phoneNumber: "119-380-1270",
        customerID: "rezzie2"
    }
];