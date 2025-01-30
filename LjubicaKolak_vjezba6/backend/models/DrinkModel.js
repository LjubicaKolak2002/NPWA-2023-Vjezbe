import  mongoose  from "mongoose";

const drinkModel = new mongoose.Schema(
    {
        name:{type:String},
    }
)

export const Drink = mongoose.model('Drink', drinkModel);