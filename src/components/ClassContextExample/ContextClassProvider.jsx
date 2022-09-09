import React from 'react';
import ContextClassConsumer from './ContextClassConsumer';
import ReactContext from './ReactContext';

class ContextClassProvider extends React.Component{
    render(){
        return(
            <ReactContext.Provider value={
                {userName: 'Kamal',
                 lName: 'walia'}
                }>
                <ContextClassConsumer />
            </ReactContext.Provider>
        )
    }

}

export default ContextClassProvider;