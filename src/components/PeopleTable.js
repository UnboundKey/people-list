import React from 'react'
import PeopleRow from './PeopleRow'
export default function PeopleTable(data) {
  return (
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Id</th>
          <th>City</th>
        </thead>
        <tbody>
            <PeopleRow person={data}></PeopleRow>
        </tbody>
      </table>
    </div>
  )
}
