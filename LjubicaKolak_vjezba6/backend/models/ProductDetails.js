import  mongoose  from "mongoose";

const productDetailsModel = new mongoose.Schema(
    {
        name: {type:String},
        price: {type:String},
        drinkType_id: {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'DrinkType',
            required: true
        },
        ingredients: {type:Array}
    }
)

export const ProductDetails = mongoose.model('ProductDetails', productDetailsModel);