import React from "react"

export default function Users(props){
 
  let tableRows = [];
  props.users.forEach(user => {
    tableRows.push(
      <tr>
        <td id={user.id} onClick={event => props.changeSelected(event.target.id)}>{user.name}</td>
      </tr>
    )
  })

 
  return(
    <div className="usersDiv">
      <table>
        <tr>
          <td><b>Users</b></td>
        </tr>
        {tableRows}
      </table>
    </div>
  )
}
