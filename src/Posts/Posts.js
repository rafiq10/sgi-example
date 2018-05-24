import React from 'react';
import axios from 'axios';
import OnePost from '../SinglePost/SinglePost';
import tblClass from './Posts.css'

export default class Posts extends React.Component{

  state={
    posts:[]
  }

  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/posts').then( res => {
      this.setState({posts: res.data.slice(1,11)})
      // console.log(this.state)
      // console.log(this.state.posts[0].title)
    })
  }
  render(){

    return(
      <div>
        <h1>Beinvenido equipo SGI</h1>

        <br />

        <table style={{width: "100%"}}>
        <tbody>
          <tr>
            {/* <th style={{color: 'white', backgroundColor: 'rgb(95, 100, 100)'}}>Title</th>
            <th style={{color: 'white', backgroundColor: 'rgb(95, 100, 100)'}}>Body</th>  */}

            <th className={tblClass.th}>Title</th>
            <th className={tblClass.th}>Body</th> 
          </tr>

          {this.state.posts.map(p => 
            <OnePost 
              key={p.id}
              title={p.title}
              body={p.body}
            />
          )}
          </tbody>
        </table>
      </div>
    )
  }
}