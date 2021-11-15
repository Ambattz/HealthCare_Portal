import React from 'react';
import {Table }from'react-bootstrap';

const Treatdisp = (props) => {
    return (
        
        <React.Fragment>
        
        <div>
        <Table striped bordered hover variant="light">

  <tbody>
    <tr>
     <td><strong> {props.Name}</strong></td>
     <td><strong> {props.SName}</strong></td>
     <td><strong> {props.Brand}</strong></td>
      <td><strong>{props.Avail}</strong></td>
      <td><strong> {props.Price}</strong></td>

     
    </tr>

  </tbody>
</Table></div></React.Fragment>
    )
    };

export default Treatdisp;