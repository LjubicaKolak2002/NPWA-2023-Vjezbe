import React, { Component, useContext} from "react";
import { useParams } from "react-router-dom";
import Modal from "./Modal";
import { Link } from "react-router-dom";
import Context from "./CartContext";

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = { showModal: false };
    this.props = {type: props.type, selectedDrink: props.selectedDrink, id: props.id};
  }

   //zatvaranje modala
  handleNoButtonClick = () => {
    this.setState({ showModal: false });
  };

  setCart = (newCart) => {
    this.setState({ cart: newCart });
  };


  componentDidMount() {
    fetch(`https://demo9854829.mockable.io/napitci/${this.props.type}/detalji`)
      .then((response) => response.json())
      .then((data) => {
        let filteredDrinks = data[this.props.selectedDrink].filter(
          (drink) => drink.id == +this.props.id
        );
        this.setState({
          id: filteredDrinks[0].id,
          name: filteredDrinks[0].naziv,
          price: filteredDrinks[0].cijena,
          ingredients: Array(filteredDrinks[0].sastojci),
        });
      });
  }

  addToCart = () => {
    const { id, name, price } = this.state;
    const product = {
      id: id,
      name: name,
      price: price,
      quantity: 0,
    };
  
    const [cart, setCart] = this.context;
  
    const foundItem = cart.find((item) => item.name === product.name);
  
    if (foundItem) {
      foundItem.quantity += 1;
    } else {
      product.quantity = 1;
      setCart([...cart, product]);
    }
  
    this.setState({ showModal: true });
    //console.log("Košarica:", cart);
  };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    const { name, price, ingredients, showModal } = this.state;

    return (
      <>
        <div className="details">
          <br />
          <h3>Product details</h3>
          <br />
          <br />
          Naziv:<strong>{name}</strong>
          <br />
          Cijena:<strong>{price}</strong>
          <br />
          Sastojci:
          <strong>{ingredients ? ingredients.join(", ") : ""}</strong>
        </div>

        <button onClick={this.addToCart} className="cartButton">
          Dodaj u košaricu
        </button>
        
        <div>
          {showModal ? (
            <Modal>
              <div className="modal">
                <h4>Proizvod je dodan u košaricu.</h4>
                <br />
                <p>Želite li vidjeti sadržaj košarice?</p>
                <br />
                <div className="buttons">
                  <Link to="/cart" className="link">
                    <button className="yesButton">Da</button>
                  </Link>
                  <button onClick={this.handleNoButtonClick} className="noButton">
                    Ne
                  </button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </>
    );
  }
}

const WrappedDetails = (props) => {
  const params = useParams();
  const cartContext = useContext(Context);
  return <Details {...props} {...params} context={cartContext} />;
};

Details.contextType = Context;

export default WrappedDetails;