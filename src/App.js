import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import {Route, Switch} from 'react-router-dom';



import HomeScreen from './HomeScreen';
import Data from './Data';

class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        isFetching: false,
        users: []
    };
}
  componentDidMount(){
    
  }


  render(){
  return (
        <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/data" component={Data} />
        </Switch>
        );
}
}

export default App;

