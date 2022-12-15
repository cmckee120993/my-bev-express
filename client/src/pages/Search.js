import React, { useState } from 'react';
import { Card } from 'semantic-ui-react';
import axios from 'axios';
import { useStoreContext } from '../utils/GlobalState'
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from '../utils/actions';
import { idbPromise } from '../utils/helpers';
import '../styles/Search.css'




function Search(item) {
  const [APIData, setAPIData] = useState([]);
    
  const searchItem = function() {
  const searchParams =  document.querySelector('.search-words').value;
  const options = {
        method: 'POST',
        url: 'https://mpowerapi.azurewebsites.net/api/v1/items/search',
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
        },
        data: {search: `${searchParams}`}
      };
      
        axios.request(options).then(function (response) {
          console.log(response.data.Results);
        setAPIData(response.data.Results);
      }).catch(function (error) {
        console.error(error);
      })
    };
    

    const [state, dispatch] = useStoreContext();
    const { cart } = state;
    
    const addToCart = (event) => {
     
    let cartButton = event.target;
    let itemName = cartButton.getAttribute('itemName');
    let itemPrice = cartButton.getAttribute('itemPrice');
    
      console.log(itemName);
      console.log(itemPrice);
      const itemInCart = cart.find((cartItem) => cartItem.name === itemName)
      console.log(itemInCart);
      if(itemInCart) {
        dispatch({
          type: UPDATE_CART_QUANTITY,
          name: itemName,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
        });
        idbPromise ('cart', 'put', {
          ...itemInCart,
          purchaseQuantity: parseInt(itemInCart.purchaseQuantity) +1
        });
      } else {
        dispatch({
          type: ADD_TO_CART,
          product: { name: itemName, price: itemPrice,  purchaseQuantity: 1 }
        });
        idbPromise('cart', 'put', { ...item, purchaseQuantity: 1});
      }
    }

      return (
        <>
            <input type="text" className="search-words" placeholder="Search for our products here..."></input>
            <button type="submit" className="search-button" onClick={searchItem}>Search</button>
            <Card.Group itemsPerRow={4}>
                {APIData.map((item) => {
                  let price = item.CaseRetail;
                  let name = item.Description;
                    return (
                        <Card className="card">
                            <Card.Content>
                                <Card.Header>{name}</Card.Header>
                                <Card.Description>
                                    {price}
                                    {item.QuantityAvailable}
                                    {item.Category}
                                </Card.Description>
                            </Card.Content>
                            <button itemName={item.Description} itemPrice={item.CaseRetail} onClick={addToCart} className="cart-button">Add to Cart</button>
                        </Card>
                    )
                })}
            </Card.Group>
        </>
    );
    
};

export default Search;
