import React from 'react';

const Loading = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.text}</div>
        </div>
    );
};

Loading.defaultProps = {
    text : 'Loading...'
};

export default Loading;
