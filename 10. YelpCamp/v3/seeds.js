var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVYgfIhJHo4fqF0hkhMWxGrxOIKwCDWlUBvu9oBLSral6U5xS",
        description:"blah blah blah"
    },
        {
        name:"Desert Mesa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDCbdNXgogmeW66_isOt59khCYjx9JAlW_dJWRQIwQgx9L0mbEA",
        description:"blah blah blah"
    },
        {
        name:"Rest Nows",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhj3EQZrasVKHWENG3Nw-y3Brz-XhmaFQe08Sq156rf2xLNre",
        description:"blah blah blah"
    },
    ]

function seedDB(){
    //Remove all campground
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
            //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create a comment
                    Comment.create(
                        {
                            text:"This place is great, but I wish there was internet",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("Created new comment");
                            }
                         
                        });
                }
            });
        });
    
    });
    

}

module.exports = seedDB;




