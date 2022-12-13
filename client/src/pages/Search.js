import React, {useState, useEffect} from 'react';
import {Card, Input} from 'semantic-ui-react';
import axios from 'axios';

import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';





function Search() {
  const [APIData, setAPIData] = useState([]);
  const [addOrder] = useMutation(ADD_ORDER);
    
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

      return (
        <>
          <button onClick={addOrder}>Start An Order</button>
            <input type="text" className="search-words" placeholder="Search for our products here..."></input>
            <button type="submit" className="search-button" onClick={searchItem}>Search</button>
            <Card.Group itemsPerRow={4}>
                {APIData.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Card.Header>{item.Description}</Card.Header>
                                <Card.Description>
                                    {item.CaseRetail}
                                    {item.QuantityAvailable}
                                    {item.Category}
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })}
            </Card.Group>
        </>
    );
    
};

export default Search;
