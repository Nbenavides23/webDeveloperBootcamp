var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name:"Cloud's Rest",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuVYgfIhJHo4fqF0hkhMWxGrxOIKwCDWlUBvu9oBLSral6U5xS",
        description:"Bacon ipsum dolor amet andouille boudin ham hock frankfurter corned beef turkey. Short ribs filet mignon shankle fatback shoulder burgdoggen pork belly pig. T-bone capicola biltong filet mignon salami tenderloin venison bacon sausage cow swine pork loin strip steak. Corned beef ham brisket shankle, shoulder jowl pork belly turkey ham hock fatback beef tri-tip rump"
    },
        {
        name:"Desert Mesa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdDCbdNXgogmeW66_isOt59khCYjx9JAlW_dJWRQIwQgx9L0mbEA",
        description:"Filet mignon jowl chuck beef short ribs meatball porchetta. Ribeye venison turkey frankfurter meatloaf meatball. Kevin turkey pork chop ball tip flank beef. Filet mignon jowl chicken rump tri-tip flank venison shankle corned beef."
    },
        {
        name:"Rest Nows",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdhj3EQZrasVKHWENG3Nw-y3Brz-XhmaFQe08Sq156rf2xLNre",
        description:"Pig meatloaf bacon bresaola meatball, kevin strip steak capicola chuck prosciutto frankfurter porchetta pork fatback. Pancetta beef ribs pork loin cupim shankle, pork belly ground round turkey ball tip tail tenderloin flank bresaola."
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




