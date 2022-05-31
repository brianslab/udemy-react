import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" />
            <CommentDetail author="Jack" />
            <CommentDetail author="Daniel" />
            <CommentDetail author="Teal'c" />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
