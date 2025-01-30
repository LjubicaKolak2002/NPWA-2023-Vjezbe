import  mongoose  from "mongoose";

const drinkTypeModel = new mongoose.Schema(
    {
        name:{type:String},
        drink_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref: 'Drink',
            required: true
        }
    }
)

export const DrinkType = mongoose.model('DrinkType', drinkTypeModel);