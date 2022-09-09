import React from "react";
import MyContext from "./Context";

class UseContextComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer >
        { (context) => {
            return(
                <div>
                    <p>Hello {context.userName}</p>
                </div>
            )
        }
        }
      </MyContext.Consumer>
    );
  }
}

export default UseContextComponent