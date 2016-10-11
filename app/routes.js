//require express
var express = require("express");
var path = require("path");

//create router object
var router = express.Router();

//export our router
module.exports = router;

//route our homepage
router.get("/", function(req, res){
  //this is a pretend database. To be used to show dynamic content in view.
  var courses = [
    {title: "Pragmatic Studio : Ruby Programming Course", link: "https://pragmaticstudio.com/courses/ruby"},
    {title: "Pragmatic Studio - Mastering Ruby Blocks & Iterators", link: "https://pragmaticstudio.com/courses/ruby-blocks"},
    {title: "Pragmatic Studio - Ruby on Rails - Level 1", link: "https://pragmaticstudio.com/courses/rails"},
    {title: "Pragmatic Studio - Ruby on Rails - Level 2", link: "https://pragmaticstudio.com/courses/rails-ii"},
    {title: "Various Modules at Team Treehouse", link: "https://teamtreehouse.com/owenschebella"},
    {title: "Ruby on Rails courses at Learneroo", link: "https://www.learneroo.com"},
    {title: "Javascript Course Codecademy", link: "https://www.codecademy.com/learn/javascript"},
    {title: "jQuery Course Codecademy", link: "https://www.codecademy.com/learn/jquery"},
    {title: "Git Course Codecademy", link: "https://www.codecademy.com/learn/learn-git"}
  ];
  res.render("pages/home", {courses: courses});
});

//route for about page
router.get("/about", function(req, res){
    res.render("pages/about", {users: users});
});

//route for contact page
router.get("/contact", function(req, res){
  res.render("pages/contact");
});
router.post("/contact", function(req, res){
  res.send("Thanks for reaching out, " + req.body.name + "! I'll get back to you shortly!");
});
