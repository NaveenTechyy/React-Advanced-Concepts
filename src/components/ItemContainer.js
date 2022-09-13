import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "./Redux";

function ItemContainer(props) {
  const { item, buyItem } = props;
  return (
    <div>
      <h2>Item = {item} </h2>
      <button onClick={buyItem}>Buy Items</button>
    </div>
  );
}

//Refer app.js ----> ownProps.cake will check whether cake was sent as a props

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
