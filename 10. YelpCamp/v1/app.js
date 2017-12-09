var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

    var campgrounds = [
        {name: "Salmon Creek", image: "http://dnr.alaska.gov/Assets/uploads/DNRPublic/parks/aspunits/pic/birdcrk.jpg"},
        {name: "Granite Hill", image: "http://dnr.alaska.gov/Assets/uploads/DNRPublic/parks/aspunits/pic/birdcrk.jpg"},
        {name: "Mountain Goat's Rest", image:"http://dnr.alaska.gov/Assets/uploads/DNRPublic/parks/aspunits/pic/birdcrk.jpg"}
        ];

app.get("/", function(req, res){
    res.render("landing");
});
// post.. create a new campground 
app.get("/campgrounds", function(req,res){
        
        res.render("campgrounds",{campgrounds,campgrounds});
});

app.post("/campgrounds", function(req, res){
    // test - res.send("YOU HIT THE POST ROUTE!")
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name, image: image}
    campgrounds.push(newCampground);
    // redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
    res.render("new.ejs");
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!");
});
