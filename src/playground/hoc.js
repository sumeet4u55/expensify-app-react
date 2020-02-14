import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => {
    return (
        <div>
            <h1>Info</h1>
            <p>The info is: {props.info}</p>
        </div>
    );
}

const requireAuth = (WrappedComponent) => {
    return (props) => {
        let jsx = props.auth ? <WrappedComponent {...props} /> : <p>You are not authenticated kindly login</p>;
        return (
            <div>
                {jsx}
            </div>
        );
    }
}

const AuthInfo = requireAuth(Info);

ReactDOM.render(<AuthInfo auth={false} info="Sumeet" />, document.getElementById('app'));