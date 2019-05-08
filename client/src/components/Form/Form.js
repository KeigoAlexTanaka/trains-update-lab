import React from 'react';

const Form = props => {
  return (
    <form onSubmit={e => props.postTrain(e)}>
      <label htmlFor="name">Name: </label>
      <input onChange={e => props.handleChange(e)}
        type="text"
        name="name"/>
      <label htmlFor="km_traveled">km_traveled: </label>
      <input onChange={e => props.handleChange(e)}
        type="number"
        name="km_traveled"/>
      <label htmlFor="train_type">train_type: </label>
      <input onChange={e => props.handleChange(e)}
        type="text"
        name="train_type"/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form;
