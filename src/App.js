import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Content from './Components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Create from './Components/create';
import Read from './Components/read';
import Edit from './Components/edit';

class App extends React.Component{
  render(){
  return (
    <Router>
    <div className="App">
       <Navbar bg="primary" variant="dark">
    <Nav className="mr-auto">
      
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
      <Nav.Link href="/">Home</Nav.Link>
    </Nav>
    </Navbar>

    <Switch>
    <Route path='/' component={Content} exact />
    <Route exact path='/create' component={Create} />
    <Route path='/read' component={Read} />
    <Route path = '/edit/:id' component = {Edit}/>


    </Switch>
      
    
    </div>
    </Router>
    
  );
}
}
export default App;
