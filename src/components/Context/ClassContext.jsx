import React from "react";
import MyContext from "./Context";
import UseContextComponent from "./UseContextComponent";

class ClassContext extends React.Component {
  render() {
    return (
      <MyContext.Provider value={{userName:'kamal'}}>
        <UseContextComponent />
      </MyContext.Provider>
    );
  }
}

export default ClassContext