import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from  '../utils/queries';
import { useMutation } from '@apollo/client';
import { UPDATE_USER } from '../utils/mutations';
import '../styles/CustomerPanel.css'

function CustomerPanel() {
    const { data } = useQuery(QUERY_USER);
    let user;
    if (data) {
        user = data.user;
    };
    console.log(data);
    const [formState, setFormState] = useState({email: '', firstName: '', lastName: ''})
    const [updateUser] = useMutation(UPDATE_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const mutationResponse = await updateUser ({
            variables: {
                email: formState.email,
                firstName: formState.firstName,
                lastName: formState.lastName,
            },
        });
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    };

    return (
       <>
        <h2 className='update-title'>Update User Info</h2>
        <form className='update-form' onSubmit={handleFormSubmit}>
            <div className='update-form-div'>
                <div>
                    <label className="update-label" htmlFor="firstName">First Name:</label>
                    <input
                        className="update-input"
                        name="firstName"
                        type="firstName"
                        id="firstName"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="update-label" htmlFor="lastName">Last Name:</label>
                    <input
                        className="update-input"
                        name="lastName"
                        type="lastName"
                        id="lastName"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="update-label-email" htmlFor="email">Email:</label>
                    <input 
                        className="update-input"
                        name="email"
                        type="email"
                        id="email"
                        onChange={handleChange}
                    />
                </div>
                <div className='update-button-div'>
                    <button className='update-button' type="submit">Update</button>
                </div>
            </div>
        </form>
            <div>
                {user ? (
                <>
                    <h2> Order History for {user.firstName} {user.lastName}</h2>
                    {user.orders.map((order) => (
                        <div>
                            <h3>
                            {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                            </h3>

                            <div>
                                <ul>
                                    <li>{order.orderOwner}</li>
                                    <li>{order.deliveryDate}</li>
                                    <li>{order.orderTotal}</li>
                                </ul>
                            </div>
                        
                        <div>
                            {order.products.map(({name, price, purchaseQuantity}, index) => (
                                <div>
                                    <p>{name}</p>
                                    <p>{price}</p>
                                    <p>{purchaseQuantity}</p>
                                </div>
                            ))}
                        </div>
                        </div>
                    ))}
                </>
                ): null}
            </div>
       </>
    )
};

export default CustomerPanel;