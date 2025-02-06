// import React, { Component } from 'react'
// import PropsChildrenex from './components/PropsChildrenex';
// import SubChildProps from './components/SubChildProps';


// class App extends Component {
//   render() {
//     return (
//       <div>
//         <PropsChildrenex username="uday" company="Google">
//         <h1>This data is passing as a props to child components</h1>
//         <SubChildProps></SubChildProps>
//         </PropsChildrenex>
        
//       </div>
//     )
//   }
// }
//  export default App;

import React, { Component } from "react";
import CBCStateEx from "./components/CBCStateEx";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to React State Example</h1>
        <CBCStateEx /> 
      </div>
    );
  }
}

export default App;
