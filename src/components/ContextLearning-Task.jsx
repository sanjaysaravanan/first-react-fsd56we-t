/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

// Step 1. Creation
const CartContext = createContext(null);

const ChildC = () => {
  const { cart, handleQty } = useContext(CartContext);

  return (
    <>
      {console.log("rendering child C")}

      <h1>Child C</h1>
      {/* <h2>{context.count}</h2>
      <button onClick={context.handleInc}>Inc</button> */}
      {cart.map((pd) => {
        return (
          <div
            key={pd.id}
            style={{
              border: "1px solid",
              textAlign: "center",
              padding: "16px",
              position: "relative",
            }}
          >
            <img src={pd.image} alt={pd.name} />
            <br />
            <select
              value={pd.quantity}
              onChange={(e) => {
                const { value } = e.target;
                handleQty(pd.id, value);
              }}
            >
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
            </select>
            <br />
            <h4>Price: ${pd.price * parseInt(pd.quantity)}</h4>
          </div>
        );
      })}
    </>
  );
};

const ChildB = () => {
  return (
    <>
      {console.log("rendering child B")}

      <h1>Child B</h1>
      <ChildC />
    </>
  );
};

const ChildA = () => {
  return (
    <>
      {console.log("rendering child A")}

      <h1>Child A</h1>
      <ChildB />
    </>
  );
};

const Parent = () => {
  const [cart, setCart] = useState([
    {
      id: "harry-potter",
      name: "Harry Potter",
      image:
        "https://m.media-amazon.com/images/I/81q77Q39nEL._AC_UF1000,1000_QL80_.jpg",
      quantity: 1,
      price: 2.0,
    },
  ]);

  const handleQty = (id, newQty) => {
    const obj = cart.find((pd) => pd.id === id);

    obj.quantity = newQty;

    const objIndex = cart.findIndex((pd) => pd.id === id);

    const temp = [...cart];
    temp[objIndex] = obj;

    setCart(temp);
  };

  return (
    <CartContext.Provider value={{ cart, handleQty }}>
      {console.log("rendering parent")}
      <h1>Parent Component</h1>
      <ChildA />
    </CartContext.Provider>
  );
};

export default Parent;
