import React, { useState } from 'react';

function MemberForm(props) {
    const [member, setMember] = useState({
        name: "",
        age:"",
        role:""
    });
//^thats an array used in side the form
    const handleChange = e => {
        setMember({...member, [e.target.name] : e.target.value})
        console.log(e.target.value);
    }
    
    const submitForm = e =>{
        e.preventDefault();
        props.addNewMember(member)
        setMember({
            name: "",
            age: "",
            role: "",
        });
    }//the above is a function to prevent the default settings when we add a new member
    return (// this is what is been displayed tru app and into the screen
        <div>
            <form onSubmit={submitForm}>
                <label htmlFor="name">Name</label>
                <input 
                id="name"
                name="name"
                type="text"
                value={member.name}
                onChange={handleChange} />
                <label htmlFor="age">Age</label>
                <input
                id="age"
                name="age"
                type="text"
                value={member.age}
                onChange={handleChange} />
                <label htmlFor="role">Role</label>
                <input
                id="role"
                name="role"
                type="text"
                value={member.role}
                onChange={handleChange} />
                <br/>
                <button type="submit">Add Member</button>
            </form>
        </div>
    )
}

export default MemberForm;