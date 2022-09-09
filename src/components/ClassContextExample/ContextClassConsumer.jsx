import React from 'react';
import ReactContext from './ReactContext';

class ContextClassConsumer extends React.Component{
    render(){
        return(
            <ReactContext.Consumer>
                {
                    (value) => {
                        return(
                            <div>
                                Hello {value.userName} {value.lName}
                            </div>
                        )
                    }
                }
            </ReactContext.Consumer>
        )
    }

}

export default ContextClassConsumer