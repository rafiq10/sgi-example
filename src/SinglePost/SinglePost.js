import React from 'react';

const OnePost = (props)=>{
  console.log(props)

  return(
    <tr> 
      <td>{props.title}</td>
      <td>{props.body}</td> 
    </tr>
  )
}


export default OnePost;