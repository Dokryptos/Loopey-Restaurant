const mongoose = require("mongoose");

const Pizza = require("../models/Pizza.model")


mongoose.connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
    .then((response) => {
        console.log(`Connected to Mongo ! database name : ${response.connections[0].name}`);
        
        return Pizza.deleteMany({});
    })
    .then((response) =>{
        //create a new document (a new pizzaArr)
        console.log(response);


        const newPizzaArr = [{
            title: "margarita",
            price: 12,
            isVeggie: true,
            ingredients: ["Tomato Sauce", "Mozzarella", "Black olive","Ham", "Basilic"],
            imageFile: 'pizza-margarita.jpg',
            timer: 12,
        },
        {   
            title: "veggie",
            price: 14,
            isVeggie: true,
            dough: "classic",
            ingredients: ["Vegetable", "Mozzarella", "Basilic", "Love"],
            imageFile: 'pizza-veggie.jpg',
        },
        {
            title: "seafood",
            price: 18,
            isVeggie: false,
            imageFile: "pizza-seafood.jpg",
            dough: "extra thin",
            ingredients: ['Tomato sauce', 'Garlic', 'Prawn'],
            timer: 16,
        },
        {
            title: "hawaiian",
            price: 17,
            isVeggie: true,
            ingredients: ["Mozzarella", "Pineapple", "Patience..."],
            timer: 19,
        }]

        return Pizza.insertMany(newPizzaArr)
        
        
    })
    .then( (valueFromDB) => {
        console.log("we have created :", valueFromDB.length)
        mongoose.connection.close();
    })  
    .catch((err) => console.log('Error', err));