import React from 'react'
//import styles from './Blooddisp.module.css';
import {Table }from'react-bootstrap';
  
const Newdisp = (props) => {
  
    return (
         
        <React.Fragment>

        <Table striped bordered hover variant="light">

  <tbody>
    <tr>
     
      <td><strong >{props.Blood}</strong></td>
      <td><strong >{props.n2}</strong></td>
      <td><strong >{props.n3}</strong></td>
      <td><strong >{props.n4}</strong></td>
    
      

    </tr>

  </tbody>
</Table></React.Fragment>
     )
    };


export default Newdisp;