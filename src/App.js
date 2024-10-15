import { Component } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './component/Home/Home';
import { Appointment } from './component/Appointment/Appointment';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        
        <Routes>
          <Route path="/" Component={Home}/>
        <Route path="/appointment" Component={Appointment}/>
        </Routes>
       
      </BrowserRouter>
    )
  }
}

export default App;
