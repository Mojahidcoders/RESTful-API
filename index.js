const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { title } = require("process");
const methodOverride = require("method-override");

app.use(express.urlencoded ({extended : true }));
app.use(methodOverride('_method'));

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        title : "post 1",
        caption : "this is post 1",
        Image : "https://picsum.photos/200/300",

    },
    {
        title : "post 1",
        caption : "this is post 1",
        Image : "https://picsum.photos/200/300",
 
    },
    {
        title : "post 1",
        caption : "this is post 1",
        Image : "https://picsum.photos/200/300",

    },
]

// dusre path ya page pe jane ke liye use karte hai get  ka
app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
});

// form path 
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
})

// post path jab v post button click ho tab form ka data posts path mai save ho jayega req.body ke through
app.post("/posts", (req,res) => {
    const{title,caption,Image } =req.body;
    posts.push({title,caption,Image});
    res.redirect("/posts");
 });
   

// app.delete("/posts/:title", (req,res) => {
//     let { title } = req.params;
//     posts = posts.filter(post => post.title !== title);
//     res.redirect("/posts");
// })

app.delete("/posts/:title", (req, res) => {
    const { title } = req.params;
    posts = posts.filter(post => post.title !== title);
    res.redirect("/posts");
});

 
 

app.listen(port, () =>{
    console.log("server working m");
});