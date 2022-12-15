import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';

function Checkout() {
//     useEffect(() => {
//         async function sendOrder() {
//         const [addOrder] = useMutation(ADD_ORDER);
//         const cart = await idbPromise('cart', 'get');
//         const products = cart.map((item) => item.name);
//         const deliveryDate = document.querySelector('.deliv-date').value;
//         const orderOwner = document.querySelector('.order-owner').value;
//         console.log(products);
//         console.log(deliveryDate);
//         console.log(orderOwner);
//         if (products.length) {
//             const { data } = await addOrder({ variables: { products } });
//             const productData = data.addOrder.products;
//             console.log(productData);
//         productData.forEach((item) => {
//             idbPromise('cart', 'delete', item);
//         });
//         }
//         addOrder({ variables: deliveryDate });
//         addOrder({ orderOwner: orderOwner });
//         deliveryDate.set('value', '');
//         orderOwner.set('value', '');
// }
// })

    return (
        <>
        <h1>Your Order</h1>

        </>
    )
};

export default Checkout;