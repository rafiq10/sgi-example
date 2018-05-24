import React from 'react';
import axios from 'axios';

export default class Posts extends React.Component{

  state={
    posts:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
      this.setState({posts: res.data.slice(1,11)})
      console.log(this.state)
    })
  }
  render(){

    return(
      <div>
        <h1>Beinvenido equipo SGI</h1>

      </div>
    )
  }
}