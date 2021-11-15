import React, { Component } from "react";
/* Import Components */
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";
//import firebase from '../firebaseConfig';
import axios from '../axios-orders';

class FormContainer1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: []
        
      ,

      genderOptions: ["bottles", "strips", "capsule"],

    };
  
    
    this.handleAge = this.handleAge.bind(this);
    this.handleFullName = this.handleFullName.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  
    this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput(e) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea(e) {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if (this.state.newUser.skills.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.skills.filter(
        s => s !== newSelection
      );
    } else {
      newSelectionArray = [...this.state.newUser.skills, newSelection];
    }

    this.setState(prevState => ({
      newUser: { ...prevState.newUser, skills: newSelectionArray }
    }));
  }

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = {
      Form:this.state.newUser.gender,
      Brand:this.state.newUser.nam,
      Avail: this.state.newUser.age,
      Name: this.state.newUser.name,
      Price:this.state.newUser.ag,
      SName:this.state.newUser.na,
      Loc:this.state.newUser.n
    };
      console.log(userData);
    axios.post('/Pharmacy.json',userData)
    .then(response =>console.log(response))
    .catch(error =>console.log(error));
  
    }

    
  

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
      
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Medicine  Name"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your model name"}
          handleChange={this.handleInput}
        />
          <Input
          inputType={"text"}
          title={"Source Name"}
          name={"na"}
          value={this.state.newUser.na}
          placeholder={"Enter your Source name"}
          handleChange={this.handleInput}
        />
          <Input
          inputType={"text"}
          title={"Location"}
          name={"n"}
          value={this.state.newUser.n}
          placeholder={"Enter your Location"}
          handleChange={this.handleInput}
        />
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"age"}
          title={"Quantity"}
          value={this.state.newUser.age}
          placeholder={"Enter Quatity"}
          handleChange={this.handleAge}
        />
        {/* Age */}
        <Input
          inputType={"number"}
          name={"ag"}
          title={"Price"}
          value={this.state.newUser.ag}
          placeholder={"Enter your Price"}
          handleChange={this.handleInput}
        />
        {/* Age */}
        <Select
          title={"Available"}
          name={"gender"}
          options={this.state.genderOptions}
          value={this.state.newUser.gender}
          placeholder={"Select Option"}
          handleChange={this.handleInput}
        />
        {/* Age Selection */}
        <Input
          inputType={"text"}
          title={"Brand  Name"}
          name={"nam"}
          value={this.state.newUser.nam}
          placeholder={"Enter your Brand name"}
          handleChange={this.handleInput}
        />
        {/* About you */}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />
        {/* Clear the form */}
      </form>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer1;
