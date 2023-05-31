const express = require("express");
const hbs = require("hbs")

const app = express();

app.use(express.static('public')); //Make everything inside of public/ available

app.set("views", __dirname + "/views");//tells our Express app where to look for our views
app.set("view engine", "hbs");// set HBS as a the template engine

hbs.registerPartials(__dirname + "/views/partials");




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
    
    const info = {
        Pizza: "Margarita",
        Price: "14$",
        imageFile: "pizza-margarita.jpg",
        ingredients: ['mozzarella', 'tomato sauce', 'basilicum'],
    }

    
    res.render("product", info)
})

app.get('/pizza/veggie', (req, res, send) => {
    
    const info ={
        Pizza: "Veggie",
        Price: '13$',
        imageFile: "pizza-veggie.jpg",
        ingredients: ['cherry tomatoes', 'basilicum', 'Olives'],
    }

    res.render("product", info)
})

app.get('/pizza/seafood', (req, res, send) => {
    
    const info = {
        Pizza: "Seafood",
        Price: "18$",
        imageFile: "pizza-seafood.jpg",
        ingredients: ['tomato sauce', 'garlic', 'prawn'],
    }
    
    res.render("product", info)
})





app.listen(3000, () => console.log('My first app listening on port 3000! '));
