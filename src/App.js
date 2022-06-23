import './App.css';
import PeopleRow from './components/PeopleRow';
import PeopleTable from './components/PeopleTable';
var requestURI = 'https://localhost:5001/api/people/all';
const axios = require('axios');

//var apiData = fetch(requestURI).then(res => res.json().then(data => console.log(data)))

var data;
axios.get(requestURI).then(function(responce) {
  // console.log(responce)
  data = responce.data;
})

function App() {
  return (
  <div className="App">
      <h2>List of people</h2>
      <div>
      <table>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>City</th>
          <th>Languages</th>
          <th>Phone Number</th>
        </thead>
        <tbody>
        {data.map(peopledata => 
            <tr key={peopledata.Id}>
              <td>{peopledata.Id}</td>
              <td>{peopledata.Name}</td>
              <td>{peopledata.PersonCity.Name}</td>
              
              {peopledata.LanguagesLinkObject.$values.map( personLanguages => 
               <tr><>{personLanguages.Language.Name}</></tr>
              )}
              <td>{peopledata.PhoneNumber}</td>
              <td><a href='google.com'>Details</a></td>
            </tr>
            )}
        </tbody>
      </table>
    </div>

    </div>
  );
}

export default App;


