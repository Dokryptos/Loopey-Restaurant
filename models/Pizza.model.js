//const {mongoose, Schema} = require("mongoose");

const mongoose = require("mongoose");
const Schema = mongoose.Schema


    //Create Schema
    const pizzaSchema = new Schema({ 
        title: {
            type: String,
            unique: true // unique string for the name inside data
        },
        price:{
            type:Number,
            required: true,
            max: 30,
            min: 8
        } ,
        isVeggie: {
            type: Boolean,
            default: false
        },
        dough: {
            type: String,
            default: "classic",
            //Enum is for enumerate different possibilities, if it's not the same name we return an error
            enum: ["classic", "extra thin", "with cheese", "with garlic"]    
        },            
        ingredients: [String],
        imageFile:{
            type: String
        },
        timer:{
            type: Number,
            default: 10,
        }
    })

    //create Model
    let Pizza = mongoose.model("Pizza", pizzaSchema);

    module.exports = Pizza;