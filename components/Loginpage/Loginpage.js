// import React from 'react';
// const Loginpage = () => (


//         <div></div>

// );

// export default Loginpage;

import React,{Component} from 'react';
import{Button,Form,FormGroup,Label,Input}
from 'reactstrap';
import styles from './Loginpage.module.css';


class Loginpage extends Component {
  render(){
    return (
      <Form className={styles.Loginpage}>
       
         <h1 className={styles.Text}>Welcome</h1>
         <FormGroup>
           <Label>Email</Label>
           <Input type="email" placeholder='Email'/>
         </FormGroup>
         <FormGroup>
           <Label>Password</Label>
           <Input type="password"  placeholder='Password'/>
         </FormGroup>
         <Button className='btn-lg btn-dark btn-block'>Log in </Button>
 
        
      </Form>
    );
  }
  
}

export default Loginpage;