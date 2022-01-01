import React, {useState, useEffect} from 'react';
import { useInput } from './hooks/useInput';
import "./Form.css";
//import Table from './Table';
//import Form from './Form';

/*
class Data extends Component {
  state = {
    characters: []
  };

  removeCharacter = index => {
    const { characters } = this.state;
    
    this.setState({
      characters: characters.filter((character, i) => { 
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }
  
  render() {
    const { characters } = this.state;
        
    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a character with a name and a job to the table.</p>
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
  */
const Form=(props)=> {
  const { value:firstName, bind:bindFirstName, reset:resetFirstName } = useInput('');
  const { value:lastName, bind:bindLastName, reset:resetLastName } = useInput(''); 
  const [names, setNames] = useState([]);
  let name = [];
  window.localStorage.setItem('appPage', JSON.stringify('form'));
  
  useEffect(() => {
    document.getElementById("txtFirstName").focus();
  }, []);
  const filterName =(key)=>{
    const temp = [...names];
    temp.splice(key,1);
    setNames(temp);
  }
  const HandleSubmit = (evt) => {
    evt.preventDefault();
    //alert(`Submitting Name ${firstName} ${lastName}`);
    if (firstName!=="" && lastName!=="") {
        name["firstname"] = `${firstName}`;
        name["secondname"] = `${lastName}`;
        name = [name["firstname"],name["secondname"]]
        setNames(names=>[...names,name]);
        //console.log("Length: ",names.length);
        //console.log("Names:", names);
    } else {
      alert(`Invalid input ${firstName} ${lastName}`);
    }
    resetFirstName();
    resetLastName();
    document.getElementById("txtFirstName").focus();
  }

  
  
  return (
    <div className="formContent">
    <form onSubmit={HandleSubmit}>
      <label >First Name:</label>  
      <input id="txtFirstName" type="text" {...bindFirstName} placeholder="Your given name..."/>
      <label >Last Name:</label>
      <input type="text" {...bindLastName} placeholder="Your surname..."/>
      <input type="submit" value="Submit" />
    </form>
    {names.length>0 &&
      <div>
        <h3>Record: {names.length}</h3>
      <table id="nameList">
        <thead>
          <tr>
            <th>Key</th>
            <th>Firt Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {names.map((c,i)=>
            <tr key={i}>
              <td>{i}</td>
              <td>{c[0]}</td>
              <td>{c[1]}</td>
              <td><button onClick={() =>filterName(i)}>Delete</button></td>
            </tr>
          )}
        </tbody>
      </table>
      </div>
    }
  </div>
  );
}

export default Form;