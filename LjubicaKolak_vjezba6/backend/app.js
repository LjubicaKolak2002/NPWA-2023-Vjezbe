import express from "express"
import mongoose from "mongoose";
import { Drink } from "./models/DrinkModel.js";
import { DrinkType } from "./models/DrinkTypeModel.js";
import {ProductDetails} from "./models/ProductDetails.js"
import bodyParser from "body-parser";
import cors from "cors";

const app = express()
const port = process.env.PORT || 3000;
const db = mongoose.connect('mongodb://localhost/drinksDB');

const drinksRouter = express.Router()

app.use(function (req, res, next) {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
   res.setHeader("Access-Control-Allow-Credentials", true);
   next();
});

app.use(bodyParser.urlencoded({
   extended: true
}));

app.use(bodyParser.json({type: 'application/json'}));

app.use(express.json())

app.use(cors({origin: "*", credentials: true}));


app.use('/api',drinksRouter);

drinksRouter.get('/', (req, res) =>{
    res.send("Welcome to my API!!!");
 })

drinksRouter.get('/napitci', (req, res)=>{
    Drink.find().then(function(drinks){
        return res.json(drinks)
   }) 
})

drinksRouter.get('/napitci/:id', async (req, res) => {
   const valid = mongoose.Types.ObjectId.isValid(req.params.id);
   if (!valid)
      return res.json({})

   DrinkType.find({ drink_id: req.params.id}).then(function(type) {
      return res.json(type)
   })
});

drinksRouter.get('/napitci/detalji/:drinkType_id', async (req, res) => {
   const valid = mongoose.Types.ObjectId.isValid(req.params.drinkType_id);
   if (!valid)
      return res.json({})
   ProductDetails.find({drinkType_id: req.params.drinkType_id}).then(function(details) {
      return res.json(details)
   })
});


drinksRouter.get('/napitci/detaljiProizvoda/:id', async (req, res) => {
   //console.log("ID: ", req.params.id)
   const valid = mongoose.Types.ObjectId.isValid(req.params.id);
   if (!valid) {
      return res.json({})
   }
   ProductDetails.findById(req.params.id).then(function(drink) {
      return res.json(drink)
   }) 
})


app.listen(port, ()=>{
   console.log("Running on port" + port);
})
