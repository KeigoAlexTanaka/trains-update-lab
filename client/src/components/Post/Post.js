import React from 'react';
// import Comment from '../Comment/Comment'
import './Post.css';

const Post = props => {
  // let { content, user, retweets, id, comments } = props.post;
  let {id,km_traveled,name,train_type,user_id} = props.post;
  return (
    <div className="Post">
      <p>{km_traveled}</p>
      <h3>{name}</h3>
      <h4>{train_type}</h4>
      <button onClick={e => props.handleDelete(e, id)}>DELETE</button>
    </div>
  )
};

export default Post;