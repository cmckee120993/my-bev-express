import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const stripePromise = loadStripe('pk_test_51MEq6CFWXFK5U75ZexkNlDZ7FbeNBjUQutlMmE5qu4Nv61d5lMsh2OR441vtErI3a1UDxgbocc9KWU4tWgE91nH500DGaFrWuq');

const Cart = () => {
    const [state, dispatch] = useStoreContext();
    const [addOrder, { data }] = useMutation(ADD_ORDER);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionID: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function toggleCart() {
        dispatch({ type: TOGGLE_CART });
    }

    function calculateTotal() {
        let sum = 0;
        state.cart.forEach((item) => {
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function sendOrder() {
        const products = [];

        state.cart.forEach((item) => {
            console.log(item);
            // for (let i=0; i < item.purchaseQuantity; i++) {
                    products.push(item);
            const deliveryDate = document.querySelector('.deliv-date').value;
            const orderOwner = document.querySelector('.order-owner').value;
            const orderTotal = document.querySelector('.cart-total').total;
            console.log(products);
            console.log(deliveryDate);
            console.log(orderOwner);
            console.log(orderTotal);
            addOrder({
                variables: {deliveryDate: deliveryDate, orderOwner: orderOwner, products: [...products] },
            });
        // };
    });
};
        

       
    if (!state.cartOpen) {
        return (
            <div className="cart-div" onClick={toggleCart}>
                <FontAwesomeIcon className="cart-image" icon={faCartShopping}/>
            </div>
        );
    }

    return (
        <div className="cart-div">
            <div className="toggle-cart" onClick={toggleCart}>
                [close]
            </div>
            <h2 className="cart-title">Shopping Cart</h2>
            {state.cart.length ? (
                <div className="cart-info">
                    {state.cart.map((item) => (
                        <CartItem key={item.name} item={item} />
                    ))}
                
                <div className="cart-input-div">
                    <div className="total-div">
                        <label>
                        Total:
                        </label>
                        <strong className='cart-total'> ${calculateTotal()}</strong>
                    </div>
                    <label>Delivery Date:</label>
                    <input className="deliv-date" type="date"></input>
                    <label>Name:</label>
                    <input className="order-owner" type="text"></input>
                    {Auth.loggedIn() ? (
                        <button className="cart-button" onClick={sendOrder}>Send Order</button>
                    ) : (
                        <span>(log in to check out)</span>
                    )}
                </div>
            </div>
            ) : (
                <h3 className="shop-more-warning">
                    You haven't added anything to your cart yet!
                </h3>
            )}
        </div>
    );
};

export default Cart;

