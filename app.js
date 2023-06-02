const express = require("express");
const hbs = require("hbs");

const Pizza = require("./models/Pizza.model");

const mongoose = require("mongoose");

const app = express();



app.use(express.static('public')); //Make everything inside of public/ available

app.set("views", __dirname + "/views");//tells our Express app where to look for our views
app.set("view engine", "hbs");// set HBS as a the template engine

hbs.registerPartials(__dirname + "/views/partials");


mongoose.connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
.then(x => {
    console.log(`Connected! Database name: "${x.connections[0].name}"`);
  })
.catch( e => console.log("error connecting to DB", e));



//app.get(path, code);
// Get for /
app.get("/", (request, res, next) => {

    res.render("home-page");
})


// GET /contact
app.get('/contact', (req, res, next) => 
    res.render("contact-page")
    )

app.get('/pizza/margarita', (req, res, send) => {

    Pizza.findOne({title: "margarita"})
        .then( (pizzaFromDB) => {
            console.log(pizzaFromDB);

            res.render("product", pizzaFromDB)
        })
        .catch(e => console.log("error", e));
    
})

app.get('/pizza/veggie', (req, res, send) => {
    
   Pizza.findOne({title: "veggie"})
   .then( (pizzaFromDB) => {
        console.log(pizzaFromDB);

        res.render("product", pizzaFromDB)
   })
   .catch(e => console.log('error', e));

})

app.get('/pizza/seafood', (req, res, send) => {
    
    Pizza.findOne({title: "seafood"})
        .then( (pizzaFromDB) => {
            console.log(pizzaFromDB)
            res.render('product', pizzaFromDB)
        })
        .catch(e => console.log('error', e));
})

app.get('/pizza/hawaiian', (req, res, send) => {
    
    Pizza.findOne({title: "hawaiian"})
        .then((pizzaFromDB) => {
            console.log(pizzaFromDB);
            res.render("product", pizzaFromDB);
        })
        .catch(e => console.log("error", e) );
    })



app.listen(3000, () => console.log('My first app listening on port 3000! '));




