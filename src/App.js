import './App.css';
import React from "react"
var requestURI = 'https://localhost:5001/api/people/all';
const axios = require('axios');


//var apiData = fetch(requestURI).then(res => res.json().then(data => console.log(data)));


//   axios.get(requestURI).then(function(responce) {
//     // console.log(responce)
//     //  setDBdata("responce.data");
//  })



function App() {

  const [dbData, setDBdata] = React.useState();

  axios.get(requestURI).then(function(responce) {
    // console.log(responce)
     setDBdata(responce.data);
 })

  return (
  <div className="App">
      <h2>List of people</h2>
      <PeopleTable dbData={dbData}/>
    </div>
  );
  
}


function sortByName() {
  // console.log("Sorting")
}



function PeopleTable(dbData) {
  console.log(dbData)
  return(
    <>
    <table className='PeopleList'>
      <thead>
        <tr>
          <th>Id</th>
          <th onClick={sortByName()}>Name</th>
          <th>Phone Nubmer</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        <PeopleTableEntry entry={dbData[0]}/>
      </tbody>
    </table>
    </>
  )
}


function PeopleTableEntry(entry) {
  // console.log(entry)
  return (
    <>
     <tr>
        <td>{entry.Id}</td>
        <td>{entry.Name}</td>    
     </tr>
    </>

  )
}

export default App;


