// import React from "react";

// class Uncontrolled extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.input = React.createRef();
//   }

//   handleSubmit(event) {
// alert("A name was submitted: " + this.input.current.value);
// event.preventDefault();
//   }

//   render() {
//     return (
//   <form onSubmit={this.handleSubmit}>
//     <label>
//       {"Name:"}
//       <input type="text" ref={this.input} />
//     </label>
//     <input type="submit" value="Submit" />
//   </form>
//     );
//   }
// }

// export default Uncontrolled;

//The Uncontrolled Components are the ones that store their own state internally,
//and you query the DOM using a ref to find its current value when you need it.
//It is always prefferred to use Controlled over Uncontrolled

import React, { useRef } from "react";

const UnControlled = () => {
  const input = useRef();

  const handleSubmit = (event) => {
    alert("A name was submitted: " + input.current.value);
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          {"Name:"}
          <input type="text" ref={input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default UnControlled;
