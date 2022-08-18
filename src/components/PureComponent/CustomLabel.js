//component renders multiple times eventhough props not changed
//CounterComponent is parent and name prop is passed from parent to child

// import React from "react";

// const CustomLabel = (props) => {
//   const { name } = props;
//   return (
//     <>
//       {console.log("CustomLabel component render")}
//       <label>
//         <b>{name}</b>
//       </label>
//     </>
//   );
// };
// export default CustomLabel;

///Now React Memo comed in picture

///prop is not changed so re-rendering not happening

import React, { memo } from "react";

const CustomLabel = (props) => {
  const { name } = props;
  return (
    <>
      {console.log("CustomLabel component render")}
      <label>
        <b>{name}</b>
      </label>
    </>
  );
};
export default memo(CustomLabel);

///////Example2///////////////////////

// import React from "react";

// const Todos = ({ todos }) => {
//   console.log("child render");
//   return (
//     <>
//       <h2>My Todos</h2>
//       {/* {todos.map((todo, index) => { */}
//       <p>{todos}</p>
//     </>
//   );
// };

// export default memo(Todos);
