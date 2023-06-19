import React from 'react'

function ClientTable({ clients }) {
  return (
    <table className="table">
    <thead>
    {clients.map((item,index)=>{
     return(
           <tr key={index}>
             <th scope="row">{++index}</th>
             <td>{item.name}</td>
             <td>{item.type}</td>
             <td>{item.address}</td>
           </tr>
         )
   })}
    </thead>
   <tbody>
   
   </tbody>
 </table>
  )
}

export default ClientTable