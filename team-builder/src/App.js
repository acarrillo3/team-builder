import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import Form from './Components/Form'

function App() {
  const [members, setTeamMember] = useState([
    {
      name:"Test",
      age: "Test",
      role:"test"
    }]);

    const [toEdit, setToEdit] = useState();
//the above is used in line 29 to edit the members information
    const addNewMember = (member) => {
      const newMember = {
        name: member.name,
        age: member.age,
        role: member.role
      }
      setTeamMember([...members, newMember])
    }
    //the above are two array functions one where we create our first member and the second one to is to add a new member but keeping the older member(s) in count as you see in line 22
  return (
    <div className="App">
      <h1>List of Our Team:</h1>
      <Form addNewMember={addNewMember} setTeamMember={setTeamMember} toEdit={toEdit} />
    </div>
  );
}

export default App;
