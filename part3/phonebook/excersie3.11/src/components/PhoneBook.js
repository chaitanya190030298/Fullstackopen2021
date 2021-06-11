  
import React from 'react'

const PhoneBook=({person,removePerson})=>{

    return(
           <div>
            <table>
                <tbody>
                   <tr>
                      <td>{person.name} </td>
                      <td>{person.number}</td>
                      <td><button onClick={() => removePerson(person.id, person.name)}>Delete</button></td>
                   </tr>
               </tbody>
           </table>
           </div>

    )

}

export default PhoneBook
