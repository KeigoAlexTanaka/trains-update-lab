import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form';
import Post from './components/Post/Post';
import Update from './components/Update/Update';
import Train from './components/Train/Train';
import axios from 'axios';

const BASE_URL = 'http://wdi_friends.draketalley.com/api';
const API_KEY = 'insert api key here';
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Authorization': `Bearer ${API_KEY}`
  }
})

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
    	posts: [],
      form: { // a nested form variable to keep separate
        name: null,
        train_type: null,
        km_traveled: null
      },
      myTrains:[]
    };
  }

 handleChange = async e => {
  let { name, value } = e.target;
  // a way of dealing with nested state
  this.setState(state => ({
    ...state, 
      'form': {
        ...state.form, [name]: value
      }
    }));
  }

  // won't work until you set up your GET route
  getTrains = async () => {
    const postData = await api.get('/trains/');
    const posts = await postData.data;
    this.setState({posts});
  }

  getTrain = async () => {
    const postData = await api.get('/trains/user/');
    const myTrains = await postData.data
    this.setState({myTrains});
  }

  // won't work until you set up your POST route
  postTrain = async e => {
    e.preventDefault();
    let { form } = this.state;
    form.km_traveled=parseInt(form.km_traveled);
    const response=await api.post('/trains/', form);
    await this.getTrain();
  }

  putTrain = async (e,id) => {
    e.preventDefault();
    let { form } = this.state;
    console.log(id,"hello");
    form.km_traveled=await parseInt(form.km_traveled);
    const response= await api.put(`/trains/${id}/`, form);
    await this.getTrain();
  }

  // won't work until you set up your DELETE route
  deleteTrain = async (e, id) => {
    e.preventDefault();
    await api.delete(`/trains/${id}/`);
    await this.getTrains();
  }

  componentDidMount = () => {
    this.getTrains();
    this.getTrain();
  }

  render() {
    let { form, posts,myTrains } = this.state;
    return (
      <div className="App">
      <ul>
        <li>
          <Link to="/">Display All</Link>
        </li>
        <li>
          <Link to="/get">Display My Trains</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>  
          <Link to="/update">Update</Link>
        </li>
      </ul>
        <Route exact path="/" render={()=>
          <div>
            <h1>Display All Trains</h1>
            { posts.length ? posts.map((post, key) => {
                return <Post key={key} post={post} handleDelete={this.deleteTrain} />
            }) : <h1>Fetch all trains!</h1> }
          </div>
        }/>
        <Route exact path="/get" render={()=>
          <div>
            <h1>Display my trains</h1>
            <button onClick={(e)=>this.getTrain(e)}>Click me</button>
            { myTrains.length ? myTrains.map((post, key) => {
                return <Train key={key} post={post} handleDelete={this.deleteTrain} />
            }) : null}
          </div>
        }/>
        <Route exact path="/create" render={()=>
          <div>
            <h1>Create a train</h1>
            <Form
              form={form}
              handleChange={this.handleChange}
              postTrain={this.postTrain}
            />
            { myTrains.length ? myTrains.map((post, key) => {
                return <Train key={key} post={post} handleDelete={this.deleteTrain} />
            }) : null}
          </div>
        }/>
        <Route exact path="/update" render={()=>
          <div>
            <h1>Update a train</h1>
            { myTrains.length ? myTrains.map((post, key) => {
                return <Train key={key} post={post} handleDelete={this.deleteTrain} form={form}
              handleChange={this.handleChange}
              putTrain={this.putTrain}/>
            }) : null}
          </div>
        }/>
       </div>
    );
  }
}

export default App;
