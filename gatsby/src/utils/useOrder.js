import { useState, useContext } from 'react';
import OrderContext from '../components/OrderContext';
import attachNamesAndPrices from './attachNamesAndPrices';
import calculateOrderTotal from './calculateOrderTotal';
import formatMoney from './formatMoney';

export default function useOrder({ beers, values }) {
  // create some state to hold the order
  // we got rid of this line because we moved the state up to our Provider
  // const [order, setOrder] = useState([]);
  // Now we access our state and our own updater function via context
  const [order, setOrder] = useContext(OrderContext);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // make a function to add things to the order
  function addToOrder(orderedBeer) {
    setOrder([...order, orderedBeer]);
  }

  // make a fucntion to remove items from the order
  function removeFromOrder(index) {
    setOrder([
      // Everything before item we want to remove
      ...order.slice(0, index),
      // Everything after the  item we wnt to oremove
      ...order.slice(index + 1),
      // becuase we have not passeda 2nd argument it will go to the end
    ]);
  }
  // const res = await fetch('./netlify/functions/placeOrder'

  // this is the function that is run when someone submits the form
  async function submitOrder(event) {
    event.preventDefault();

    setLoading(true);
    setError(null);
    // setMessage('Go Eat');

    // setError(null);
    // setMessage(null);
    // gather all the data
    const body = {
      order: attachNamesAndPrices(order, beers),
      total: formatMoney(calculateOrderTotal(order, beers)),
      name: values.name,
      email: values.email,
      mapleSyrup: values.mapleSyrup,
    };

    // 4. Send this data the a serevrless function when they check out
    // TODO
    const res = await fetch(
      '.netlify/functions/placeOrder',

      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      }
    );

    const text = JSON.parse(await res.text());

    // check if everything worked
    if (res.status >= 400 && res.status < 600) {
      setLoading(false); // turn off loading
      setError(text.message);
    } else {
      // it worked!
      setLoading(false);
      setMessage('Success! Come on down for your beer');
    }
  }

  return {
    order,
    addToOrder,
    removeFromOrder,
    error,
    loading,
    message,
    submitOrder,
  };
}
