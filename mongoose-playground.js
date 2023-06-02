const mongoose = require("mongoose");

const Pizza = require("./models/Pizza.model")

mongoose.connect("mongodb://127.0.0.1:27017/loopeyRestaurant")
    .then((response) => {
        console.log(`Connected to Mongo ! database name : ${response.connections[0].name}`);
        
        //create a new document (a new pizza)
        const pizzaOne = {
            title: "margarita",
            price: 12,
            isVeggie: true,
            ingredients: ["Tomato Sauce", "Mozzarella", "Black olive"],

        }
        const pizzaTwo = {
            title: "veggie",
            price: 14,
            isVeggie: true,
            dough: "classic",
            ingredients: ["Vegetable", "Mozzarella", "Basilic", "Love"],
            
        }

        return Pizza.create(pizzaOne, pizzaTwo)
        
        
    })
    .then( (valueFromDB) => {
        console.log("we can eat");
        return Pizza.find()
    })
    .then( (pizzaArr) => {
        console.log(`we have this amount of pizza`, pizzaArr.length);
        console.log(pizzaArr);



    return Pizza.updateMany({price: {$gt: 12} }, {dough: "with garlic"});
    })
    .then( (result) => {
        console.log("bg la pizz")
        console.log(result);
        mongoose.connection.close();
    })
    .catch((err) => console.log('Error', err));