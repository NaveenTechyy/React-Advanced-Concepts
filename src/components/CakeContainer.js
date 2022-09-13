import React from "react";
import { connect } from "react-redux";
//Importing from index.js
import { buyCake } from "./Redux";

//Importing Hook component
import HooksCakeContainer from "./HooksCakeContainer";

const CakeContainer = props => {
  return (
    <div>
      <HooksCakeContainer />
      <h1>Number of Cakes = {props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy a cake</button>
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
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
