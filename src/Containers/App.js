import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../Components/Nav/Index';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './Home';
import Items from './Items';

function App() {
 
 
  
  
  return (
    <BrowserRouter>
     
      <Nav />


      
      <Route exact path='/' component={Home} />
      <Route exact path='/Items/Action/:id' component={Items} />
      <Route exact  path='/Items/Comedy/:id' component={Items} />
      <Route exact path='/Items/Crime/:id' component={Items} />
      
    
     
     
    </BrowserRouter>
  );
}

export default App;
