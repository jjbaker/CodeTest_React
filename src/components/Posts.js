import React from "react"

export default function Posts(props){
  
  const selectedUser = props.user;
  let postP = [];
  props.posts.forEach(post => {
    if(post.userId == selectedUser){
      postP.push(<p><b>{post.title}:</b> {post.body}</p>);
    }
  })
  return(
    <div className="postsDiv">
    {selectedUser !== false ?
        <table>
          <tr>
            <th>Posts</th>
          </tr>
          <tr>
          <td>{postP}</td>
          </tr>
        </table> :
      <div>Click a user to see their posts</div>}
      </div>
    
  )
}