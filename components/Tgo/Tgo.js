import React from 'react'
import {Table }from'react-bootstrap';

const Blooddisp = (props) => {
  
    return (
        <React.Fragment>
        {/* <div className={styles.Blooddisp}>
            <div className={styles.Btext}>
            Blood Group <strong>{props.Blood}</strong>
            Unit Available <strong> {props.UnitAvail}</strong>
            Hospital Name <strong> {props.HospitalName}</strong>
            District <strong> {props.District}</strong></div>
        </div> */}
        
        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Blood Group</th>
      <th>Unit Available</th>
      <th>Hospital Name</th>
      <th>District</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td><strong>{props.Blood}</strong></td>
      <td><strong> {props.UnitAvail}</strong></td>
      <td><strong> {props.HospitalName}</strong></td>
      <td><strong> {props.District}</strong></td>
    </tr>

  </tbody>
</Table></React.Fragment>
    )
    };


export default Blooddisp;