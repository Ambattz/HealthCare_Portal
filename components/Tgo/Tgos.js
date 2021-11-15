
import React, { Component } from 'react';
import styles from './Blood.module.css';
//import Aux from '../../hoc/Aux';
import axios from '../../axios-orders';
import Blooddisp from './Blooddisp';
import navigationItems from '../../Navigation/NavigationItems/NavigationItems';

//import Layout from '../Layout/Layout';
//import logo from '../Logo/Logo';
//import navigationItems from '../Navigation/NavigationItems/NavigationItems';


class Blood extends Component{
    state ={
        blood:[],
        loading:true,
        i:0
        //Blood:null,
        //UnitAvail:null,HospitalName:null, District:null
    }
    
    componentDidMount() {
    axios.get('/Blood.json')
        .then(res => {
            console.log(res.data);
        
            const fetchedBlood = [];
             for (let key in res.data) {
                fetchedBlood.push({
                    ...res.data[key],
                    id: key
                   
                });
            }
            this.setState({loading: false, blood: fetchedBlood});
        })
        .catch(err => {
            this.setState({loading: false});
        });
}
    render(){
        return(
            <React.Fragment>
            <navigationItems>hii44e445y4</navigationItems>
            <div className={styles.Blo}>
                
             {this.state.blood.map(blo =>(
                 
                 
                 <Blooddisp
                 key={blo.id}
                 Blood={blo.Blood}
                 HospitalName={blo.HospitalName}
                 UnitAvail={blo.UnitAvail}
                 District={blo.District} 
                 //No={this.setState(pervState =>( {i:pervState.i+1}))}
                 />
                 
                
                
             ))}
            </div></React.Fragment>
        );
    }
}
export default Blood;