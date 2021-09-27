import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from "../redux";
function HooksIceCream() {
  const iceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream {iceCream}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy IceCream</button>
    </div>
  );
}

export default HooksIceCream;
