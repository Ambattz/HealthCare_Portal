import React, { Component } from "react";
import axios  from '../axios-orders';
import Input from "./Input";
import Select from "./Select";
import Button from "./Button";

// import firebase from '../firebaseConfig';
// var user = firebase.auth().currentUser;

class FormContainer extends Component { 

  
  constructor(props) {
    super(props);

    this.state = {
      userData:[],
      newUser: {
        Blood: "",
        UnitAvail: "",
        HospitalName: "",
        District:""
      },

      genderOptions: ["A+",
                      "A-",
                      "B+",
                      "B-",
                      "O+",
                      "O-",
                      "AB+",
                      "AB-"],

                      genderOption: ["Alappuzha",
                      "Kollam",
                      "Kozhikode",
                      "Ernakulam",
                      "Idukki",
                      "Malappuram",
                      "Kottayam",
                      "Kasargod",
                    "Thrissur",
                    "Pathanamthitta",
                    "Waynad",
                    "Kannur",
                    "Thiruvananthapuram",
                    "Palakkad"],

                    genderOptio: ["T.D. Medical College",
                      "General Hospital Ernakulam",
      "Govt. Medical College, Kozhikode (Calicut medical College)",
                      "Regional Cancer Center",
                      "Government General Hospital Mundakayam",
                      "Government Medical College, Thiruvananthapuram",
                      "S.P. Fort Hospitals ",
                      "Government Medical Colleges, Manjeri"
                    ]
    };
  //  this.handlebloodtype = this.handlebloodtype.bind(this);
  // this.handlebloodtyp = this.handlebloodtyp.bind(this);
    //this.handlebloodty = this.handlebloodty.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  // this.handleClearForm = this.handleClearForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  
  componentDidMount() {
    axios.get('/Retrival.json')
        .then(res => {
            console.log(res.data);
        
            const fetchedBlood = [];
             for (let key in res.data) {
                fetchedBlood.push({
                    ...res.data[key],
                    id: key
                   
                });
                
            }
            this.setState({userData: fetchedBlood});
          })
            .catch(err => {
              this.setState({loading: false});
          });
        

    
} 
  handleAge(e) {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          UnitAvail: value
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

  // handleFormSubmit2(e){
  //   e.preventDefault();

  //     let userData = {
  //       Blood: this.state.newUser.bloodtype,
  //       UnitAvail: this.state.newUser.UnitAvail,
  //       HospitalName: this.state.Email,
  //       District:this.state.District
  //     };
      
  //     console.log(userData + "jiji");
  //   axios.post('/Blood.json',userData)
  //   .then(response =>console.log(response))
  //   .catch(error =>console.log(error));
  //   }
  

  handleFormSubmit(e) {
    e.preventDefault();
   // let userData = this.state.newUser;
   let userData = {
    Blood: this.state.newUser.bloodtype,
    UnitAvail: this.state.newUser.UnitAvail,
    HospitalName: this.state.newUser.bloodty,
    District:this.state.newUser.bloodtyp
  };
    console.log(userData);
  axios.post('/Blood.json',userData)
  .then(response =>console.log(response))
  .catch(error =>console.log(error));

  }

  handleClearForm(e) {
    e.preventDefault();
    this.setState({
      newUser: {

        age: ""

      }
    });
  }

  render() {
  
    return (
     
      <React.Fragment>
      <form className="container-fluid" onSubmit={this.handleFormSubmit}>
       

        <Select
          title={"District"}
          name={"bloodtyp"}
          options={this.state.genderOption}
          value={this.state.newUser.bloodtyp}
          placeholder={"Select your district"}
          handleChange={this.handleInput}
        />
        < Select
          title={"Hospital Name"}
          name={"bloodty"}
          options={this.state.genderOptio}
          value={this.state.newUser.bloodty}
          placeholder={"Select your Hospital"}
          handleChange={this.handleInput}
        />
        <Select
          title={"Blood Type"}
          name={"bloodtype"}
          options={this.state.genderOptions}
          value={this.state.newUser.bloodtype}
          placeholder={"Select Blood Type"}
          handleChange={this.handleInput}
        />

        <Input
          inputType={"number"}
          name={"age"}
          title={"Units in mm"}
          value={this.state.newUser.age}
          placeholder={"Units in mm"}
          handleChange={this.handleAge}
        />
        
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />

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
  margin: "20px 20px 20px 20px"
};

export default FormContainer;
