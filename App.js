import React , { Component } from 'react';
import Layout from './components/Layout/Layout';
//import {EventCalendar} from './components/calender';
//import Problem from './containers/Problem/Problem';
import Aux from './hoc/Aux';
import { BrowserRouter } from 'react-router-dom';
//import Blood from './components/Blood/Blood';
//import {Route} from 'react-router-dom';
//import Tgo from './components/Tgo/Tgos';
//import Login from '../src/components/Loginpage/Loginpage';
import News from './components/News';
//import Blood from './components/Blood/Blood';
//import fire from './firebaseConfig';
import Login from './components/Loginpage/Loginmain';  


 global.SampleVar =true;

// let globalVariable={
//     auth:false
//   };
class App extends Component {

  render() {
      return (
  <BrowserRouter>
    <Aux>
        <div  >
          
          <Layout/>
          
          <Login/>
          {global.SampleVar ? <News/>:null }
           
        </div>
        
      </Aux>
  </BrowserRouter>
      );
    }
    
}
 
export default App;
//<Layout>
            //</Layout>