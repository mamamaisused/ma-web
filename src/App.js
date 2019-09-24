import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import HomePage from './home';
import ExamPage from './exampage';
import { HashRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return(
      <Router>
        <Route exact path = "/" component = {HomePage}/>
        <Route exact path = "/exam" component = {ExamPage}/>
      </Router>
    )
  }
}

export default App;
