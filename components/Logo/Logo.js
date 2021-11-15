import React from 'react';
import logoico from'../../assets/logo.ico';
import styles from './Logo.module.css';
const logo = (props) => (
    <div className={styles.Logo} style={{height: props.height, width:props.width , marginTop:props.mtop
    }}>
        <img  src={logoico} alt="logo"/> <p>PROJECT03</p>
        
    </div>
);

export default logo;