import React from 'react'
import styles from './Blooddisp.module.css';
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
        <div className={styles.Blooddisp}>
        <Table striped bordered hover variant="light">

  <tbody>
    <tr>
     
      <td><strong>{props.Blood}</strong></td>
      <td><strong> {props.UnitAvail}</strong></td>
      <td><strong> {props.HospitalName}</strong></td>
      <td><strong> {props.District}</strong></td>
    </tr>

  </tbody>
</Table></div></React.Fragment>
    )
    };


export default Blooddisp;