import React, { Component } from 'react';
// Styles Imports
import '../styles/App.css';
import '../styles/ConfessionCreate.css';
import '../styles/ConfessionList.css';
import '../styles/ConfessionCreate.css';
import '../styles/Sidebar.css';

import ConfessionList from './Confessions/ConfessionList';
import ConfessionCreate from './Confessions/ConfessionCreate';
import Sidebar from './Confessions/Sidebar';
import Header from './Header';
import { saveConfessionTest, getConfessionsTest } from './api';
import {Grid, Row, Col} from 'react-bootstrap';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      confessions: []
    }
  }
  
  componentDidMount() {
    getConfessionsTest()
      .then(confessions => confessions.sort((a, b) => new Date(b.date) - new Date(a.date)))
      .then(confessions => this.setState({ confessions: confessions }));
  }
      
  newConfession = (confession) => {
    let confessionObj = {title: confession, date: new Date()}
    saveConfessionTest(confessionObj)
      .then(this.setState({
        confessions: [confessionObj, ...this.state.confessions]
    }));
  }

  filterContent = (filter) => {
    if (this.state.filter === filter) { return ;}
    if (filter === 'top') { // top rated
      getConfessionsTest()
        .then(confessions => confessions.sort((a, b) => new Date(b.date) - new Date(a.date)))
        .then(confessions => this.setState({
          confessions: confessions.sort((a, b) => {
            let a_sum = a.approvals - a.disapprovals,
                b_sum = b.approvals - b.disapprovals;
            return b_sum - a_sum;
          })
        }));
    } else { // chronological fallback
      this.componentDidMount();
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Grid className="grid-container">
          <Row className="confessions-app">
            <Sidebar filter={this.filterContent} className="nav-sidebar"/>
            {/* <Col md={1} sm={1}></Col> */}
            <Col md={10} sm={10}>
              <Row><ConfessionCreate newConfession={this.newConfession}/></Row>
              <Row><ConfessionList confessions={this.state.confessions} /></Row>
            </Col>
            <Col md={1} sm={1}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default App;
