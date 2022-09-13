import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "./Redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes = {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy a cake</button>
    </div>
  );
}

export default HooksCakeContainer;
