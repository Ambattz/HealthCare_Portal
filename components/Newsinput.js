import React, { Component } from 'react';
import Input from '../Bloodselect/Input';
import  Button from '../Bloodselect/Button';
import axios from '../axios-orders';

class Newsinput extends Component  {

    constructor(props) {
        super(props);
    
        this.state = {
          newUser: []
    
        };
      
    
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleInput = this.handleInput.bind(this);
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
    
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = {
      Data:this.state.newUser.name,
      Link:this.state.newUser.na
    };
      console.log(userData);
    axios.post('/News.json',userData)
    .then(response =>console.log(response))
    .catch(error =>console.log(error));
  
    }


  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {
      name:'',
      na:''
      
      }
    });
  }

      render(){
    return (  
        
        <React.Fragment>
            <form className="container-fluid" onSubmit={this.handleFormSubmit}>
                <Input
                inputType={"text"}
                title={"Heading"}
                name={"name"}
                value={this.state.newUser.name}
                placeholder={"Enter the News Heading"}
                handleChange={this.handleInput}
                />
                <Input
                inputType={"text"}
                title={"Hyper Link"}
                name={"na"}
                value={this.state.newUser.na}
                placeholder={"Connecting Link"}
                handleChange={this.handleInput}
            
                />
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
        </form>
      </React.Fragment>
    );
      }
}
    const buttonStyle = {
        margin: "10px 10px 10px 10px"
      };

export default Newsinput;
