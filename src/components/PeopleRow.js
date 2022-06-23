import React from 'react'

export default function PeopleRow(person) {
    
    return (
        
        <tr>
            <td>{person.person.Name}</td>
            <td>{person.person.Id}</td> 
            <td>{person.person.PersonCity.Name}</td>
            <td>{person.person.PhoneNumber}</td>
            {/* <td>{person.person.LanguagesLinkObject.Language.Name}</td> */}
            <td>
                <a href='#'>Edit</a>
            </td>
        </tr>
  )
}
