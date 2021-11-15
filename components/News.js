import React, { Component } from 'react';
import axios from '../axios-orders';
import styles from '../components/News.module.css';
import Newdisp from './Newdisp';
import {Table} from 'react-bootstrap';

class News extends Component{
    state ={
        blood:[]

    }
    componentDidMount() {
        axios.get('/News.json')
            .then(res => {
                console.log(res.data);
            
                const fetchedBlood = [];
                 for (let key in res.data) {
                    fetchedBlood.push({
                        ...res.data[key],
                        id: key
                       
                    });
                }
                this.setState({ blood: fetchedBlood});
            })
            .catch(err => {
                this.setState();
            });
    }
        render(){
            return(
                global.SampleVar ?
                    
                <React.Fragment>
                    <div className={styles.News} >
                            <Table striped bordered hover variant="light">
  <thead>
    <tr>
     <th >Latest News & Upcoming Event</th>
    </tr>
  </thead></Table>``
                
                    
                 {this.state.blood.map(blo =>(
                     <Newdisp key={blo.id}
                     Blood={blo.n1}
                     n2={blo.n2}
                     n3={blo.n3}
                     n4={blo.Data}
                     n5={blo.Link}
                    
                    ></Newdisp>
                    
                 ))}
                </div>
                </React.Fragment>
           :null );
        }

    }
export default News;