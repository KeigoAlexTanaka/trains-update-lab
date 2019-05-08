import React from 'react';
// import Comment from '../Comment/Comment'
import Update from '../Update/Update';
import './Post.css';

const Train = props => {
  // let { content, user, retweets, id, comments } = props.post;
  let {id,km_traveled,name,train_type,user_id} = props.post;
  let { form, handleChange,putTrain } = props;  
  return (
    <div className="Post">
      <p>{km_traveled}</p>
      <h3>{name}</h3>
      <h4>{train_type}</h4>
      <button onClick={e => props.handleDelete(e, id)}>DELETE</button>

      <Update
        form={form}
        handleChange={handleChange}
        putTrain={putTrain}
        id={id}
        km_traveled={km_traveled}
        train_type={train_type}
      />
    </div>
  )
};

export default Train;