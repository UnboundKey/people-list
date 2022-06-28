import './App.css';
import React, { useEffect } from "react"
var requestURI = 'https://localhost:5001/api/people/';
const axios = require('axios');


//var apiData = fetch(requestURI).then(res => res.json().then(data => console.log(data)));


//   axios.get(requestURI).then(function(responce) {
//     // console.log(responce)
//     //  setDBdata("responce.data");
//  })


function App() {

  const [dbData, setDBdata] = React.useState();

  useEffect(()=>{
    axios.get(requestURI+"all").then(function(response) {
        console.log(response)
      if(response.status === "200") {
        setDBdata(response);
      }
      console.log(dbData)
   })
  },[])
  

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
          <th>Name</th>
          <th>Phone Nubmer</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {}
      </tbody>
    </table>
    </>
  )
}

export default App;


