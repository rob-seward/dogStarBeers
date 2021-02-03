import React, { useState } from 'react';

// create and order context
const OrderContext = React.createContext();

export function OrderProvider({ children }) {
  // we need to stick state in here
  const [order, setOrder] = useState([]);
  // const [values, setValues] = useState([{}]);

  // const [values, setValues] = useState([]);

  /* const providerValue = useMemo(
    () => ({
      order,
      setOrder,
      values,
      setValues,
    }),
    [order, values]
  ); */

  return (
    <OrderContext.Provider value={[order, setOrder]}>
      {children}
    </OrderContext.Provider>
  );
}

export default OrderContext;
