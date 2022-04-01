import React, {useState} from 'react';

const PostItems = (props) => {
    const[posts,setPosts] = useState([
        {id:1, title:'JavaScript 1', bpdy:'Decription'},
        {id:2, title:'JavaScript 2', bpdy:'Decription'},
        {id:3, title:'JavaScript 3', bpdy:'Decription'}
    ])
    return (
        <div className="App">
            {posts.map(post =>
                <PostItems post={post} />
                )}
            <h1>fg</h1>
        </div>
    );
};

export default PostItems;