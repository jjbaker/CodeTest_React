import React from "react";
import "./style.css";
import Header from "./components/Header.js"
import Users from "./components/Users.js"
import Posts from "./components/Posts.js"

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const [selectedUser,setSelectedUser] = React.useState(false)

  React.useEffect(() => {
    const getData = async(api,setStateFunc) => {
      const response = await fetch('https://jsonplaceholder.typicode.com/'+api);
      const data = await response.json();
      setStateFunc(data)
    }
    getData("users",setUsers);
    getData("posts",setPosts)
  },[])
  
  return (
    <div>
      <Header />
      <div className="flex">
        <Users users={users} changeSelected={setSelectedUser} />
        {selectedUser !== false ? <Posts posts={posts} user={selectedUser} /> : <div className="centerV center">Click a user to see their posts</div>}
      </div>
    </div>
  );
}
