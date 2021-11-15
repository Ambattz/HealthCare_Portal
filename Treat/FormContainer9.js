import React, { Component } from "react";
import Input from "./Input";

import Button from "./Button";
import axios from '../axios-orders';

class FormContainer2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: []
        
      

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

  

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = {
      Avail:this.state.newUser.na,
      Name:this.state.newUser.nam,
      Contact: this.state.newUser.age,
      WD: this.state.newUser.name,
      Hosp:this.state.newUser.ag,
      
    };
      console.log(userData);
    axios.post('/ORTHOPAEDIC.json',userData)
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
        nam:'',
        ag:''
      
      }
    });
  }

  render() {
    return (
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
        <Input
          inputType={"text"}
          title={"Working Days"}
          name={"name"}
          value={this.state.newUser.name}
          placeholder={"Enter your model name"}
          handleChange={this.handleInput}
        />
          <Input
          inputType={"text"}
          title={"Available"}
          name={"na"}
          value={this.state.newUser.na}
          placeholder={"Enter your Source name"}
          handleChange={this.handleInput}
        />
 
        {/* Name of the user */}
        <Input
          inputType={"number"}
          name={"age"}
          title={"Contact"}
          value={this.state.newUser.age}
          placeholder={"Enter Quatity"}
          handleChange={this.handleAge}
        />
        {/* Age */}
        <Input
          inputType={"number"}
          name={"ag"}
          title={"Hospital"}
          value={this.state.newUser.ag}
          placeholder={"Enter your Price"}
          handleChange={this.handleInput}
        />
        {/* Age */}
        
        <Input
          inputType={"text"}
          title={"Name"}
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

export default FormContainer2;
