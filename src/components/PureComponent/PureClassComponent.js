//It won't render again because the state is not changed
//shouldComponentUpdate is called so it will do a shallow check of state and props

import React, { Component, PureComponent } from "react";

class PureClassComponent extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "React JS",
    };
  }

  changeName = () => {
    this.setState({ name: "React JS" });
    // this.forceUpdate();
  };

  render() {
    console.log("FirstComponent -- Render method called");
    return (
      <div>
        <h1>React class based pure component</h1>
        <p> Name is : {this.state.name} </p>
        <button style={{ cursor: "pointer" }} onClick={this.changeName}>
          Change Name
        </button>
      </div>
    );
  }
}

export default PureClassComponent;

//////////////////Example2/////////////////////////

// import React, { useState, memo } from "react";
// import CustomLabel from "./CustomLabel";

// const PureClassComponent = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(Math.random());

//   const increment = () => {
//     setCount(count + 1);
//   };
//   console.log("parent render");
//   return (
//     <>
//       <CustomLabel todos={todos} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// export default memo(PureClassComponent);
