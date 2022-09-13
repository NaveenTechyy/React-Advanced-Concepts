import React, { useState } from "react";
import { connect } from "react-redux";
//Importing from index.js
import { buyCake } from "./Redux";

//Importing Hook component
import HooksCakeContainer from "./HooksCakeContainer";

const NewCakeContainer = props => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <HooksCakeContainer />
      <h1>Number of Cakes = {props.numOfCakes}</h1>
      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      ></input>
      <button onClick={() => props.buyCake(number)}>Buy {number} cake</button>
    </div>
  );
};

//mapStateToProps takes Redux state as a parameter and returns an object
const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

//MapDispatchToProps is something that you will use to provide the action creators as props to your component

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
