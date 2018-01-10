var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
    name: "clouds rest", 
    image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra lectus, eu molestie odio. Integer vitae placerat nisl. In nec augue sed sapien eleifend posuere a eu turpis. Integer euismod imperdiet urna non aliquam. Etiam nec mi malesuada, lobortis felis non, interdum velit. Praesent pharetra neque sapien, fermentum vehicula nisl bibendum et. Quisque condimentum maximus bibendum. Suspendisse hendrerit ipsum a mi malesuada, quis maximus lorem placerat. Mauris feugiat, lorem at ornare luctus, risus lacus varius erat, quis vulputate tellus nunc sed ex. Etiam venenatis vitae justo et egestas. Vestibulum pretium pellentesque sem in imperdiet. Aliquam erat volutpat."
    }, 
     {
    name: "desert mesa", 
    image: "https://farm7.staticflickr.com/6089/6094103869_d53a990c83.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra lectus, eu molestie odio. Integer vitae placerat nisl. In nec augue sed sapien eleifend posuere a eu turpis. Integer euismod imperdiet urna non aliquam. Etiam nec mi malesuada, lobortis felis non, interdum velit. Praesent pharetra neque sapien, fermentum vehicula nisl bibendum et. Quisque condimentum maximus bibendum. Suspendisse hendrerit ipsum a mi malesuada, quis maximus lorem placerat. Mauris feugiat, lorem at ornare luctus, risus lacus varius erat, quis vulputate tellus nunc sed ex. Etiam venenatis vitae justo et egestas. Vestibulum pretium pellentesque sem in imperdiet. Aliquam erat volutpat."
    }, 
     {
    name: "canyon floor", 
    image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac pharetra lectus, eu molestie odio. Integer vitae placerat nisl. In nec augue sed sapien eleifend posuere a eu turpis. Integer euismod imperdiet urna non aliquam. Etiam nec mi malesuada, lobortis felis non, interdum velit. Praesent pharetra neque sapien, fermentum vehicula nisl bibendum et. Quisque condimentum maximus bibendum. Suspendisse hendrerit ipsum a mi malesuada, quis maximus lorem placerat. Mauris feugiat, lorem at ornare luctus, risus lacus varius erat, quis vulputate tellus nunc sed ex. Etiam venenatis vitae justo et egestas. Vestibulum pretium pellentesque sem in imperdiet. Aliquam erat volutpat."
    } 
]

function seedDB(){
    // Remove all campgrounds
       Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
         // Add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground");
                    //create comment
                    Comment.create(
                        {
                            text: "This place was great but i wish there was internet",
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
            })
        });
    }); 
   
    // Add a few comments
}

module.exports = seedDB;