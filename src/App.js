import './App.css';
import React, { useEffect } from "react"
import { render } from '@testing-library/react';
var ENDPOINT = 'https://localhost:5001/api/people/';
const axios = require('axios');

 function App() {

  const [dbData, setDBdata] = React.useState();
  const [Loading, setLoading] = React.useState(true);

  useEffect( ()=>{
      axios.get(ENDPOINT+"all").then(function(response) {
      if(response.status === 200) {
        setLoading(false);
        setDBdata(response.data.$values);
      }
       console.log(dbData)
   })
   .catch((err) => {
    console.log(err);
  })
},[])


function PeopleTable(props) {
   return(
    <>
    <table className='PeopleList'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {props.dbData.map((data) => {
          return (
          <>
          <PeopleRow person={data}/>
          </>)
        }) }   
      </tbody>
    </table>
    </>
  )
}

function PeopleRow(props) {
  return(
    <>
      <tr>
        <td>{props.person.Id}</td>
        <td>{props.person.Name}</td>
        <td>{props.person.PhoneNumber}</td>
        <td>{props.person.City}</td>
        <td><button>Details</button></td>
      </tr>
    </>
  )
}

function PeopleActionButtons() {
  return(
    <>
      <td>
        <a href="">Delete</a>
      </td>
    </>
  )
}

  const content = Loading ? <p>Loading...</p> : <PeopleTable dbData = {dbData}/>

  return (
  <div className="App">
      <h2>List of people</h2>
      {content}
  </div>
  );
  
}




export default App;


