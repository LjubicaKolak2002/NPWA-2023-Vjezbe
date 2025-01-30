import React, { Component } from "react";
import { useParams } from "react-router";

class Details extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.props = {type: props.type, selectedDrink: props.selectedDrink, id: props.id};
      }

      componentDidMount() {
        fetch(`https://demo9854829.mockable.io/napitci/${this.props.type}/detalji`)
      .then(response => response.json())
      .then(data =>{
        let filteredDrinks = data[this.props.selectedDrink].filter((drink) => drink.id == +this.props.id);
            this.setState({
              id: filteredDrinks[0].id,
              name: filteredDrinks[0].naziv,
              price: filteredDrinks[0].cijena,
              ingredients: Array(filteredDrinks[0].sastojci),
            });
          })
      }
    

      render() {
        const { name, price, ingredients } = this.state;
        return (
            <div className="details">
              <br/><h3>Product details</h3><br/><br/>
                Naziv:<strong>{name}</strong><br/>
                Cijena:<strong>{price}</strong><br/>
                Sastojci:<strong>  {ingredients ? ingredients.join(', ') : ""} </strong>
            </div>
        )
      }
    
}

const WrappedDetails = (props) => {
    const params = useParams();
    return <Details {...props} {...params} />;
  };
  
export default WrappedDetails;