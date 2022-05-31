import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const { faker } = require('@faker-js/faker');

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                content="Nice post."
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Jack"
                timeAgo="Today at 2:00AM"
                content="Wow!"
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Daniel"
                timeAgo="Yesterday at 6:25PM"
                content="Interesting read."
                avatar={faker.image.avatar()}
            />
            <CommentDetail
                author="Teal'c"
                timeAgo="Yesterday at 1:27PM"
                content="Indeed."
                avatar={faker.image.avatar()}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
