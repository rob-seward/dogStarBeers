import { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';

export default function useForm(defaults) {
  // checks state  variable

  const [values, setValues] = useState(defaults);

  // check if its a number and convert
  // use state takes Objects , strings and numbers - numbers come in as strings so we convert back to integer so it dosen't bugger the state up

  // make updater function
  function updateValues(e) {
    // it passes numbers through as a string, so if its type is meant to be a integer number it needs to be converted
    let { value } = e.target;
    if (e.target.type === 'number') {
      value = parseInt(e.target.value);
    }
    setValues({
      // spread in all the values
      ...values,
      // update the new value that changed
      [e.target.name]: value,
      // in this case values is an object  so we use square braket notation so we can pass in the 'name' attrib as a variable and set its value. making it dynamic!
    });
  }
  return { values, updateValues };
}
