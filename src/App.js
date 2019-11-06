import React from 'react';

import axios  from 'axios'
import List from './dd/List'
import Card from './dd/Card'

import './App.css'

import Button from 'antd/es/button'
const ButtonGroup = Button.Group;



class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      todos: [],
      isok: true
    }
  }
  
  handleLogin = () => {
    axios.get('http://localhost:3000/post').then((response) => {
      // console.log(response.data)
      this.setState({
        todos: response.data
      })
    })
  }

  render () {
    return (
      <div className="App">
        <ButtonGroup className="bg clearfix">
          <Button onClick={() => {
            this.setState({
              isok: true
            })
          }}>卡片</Button>
          <Button onClick={() => {
            this.setState({
              isok: false
            })
          }}>列表</Button>
        </ButtonGroup>
        
        {this.state.isok ? <Card todos={this.state.todos}></Card> : <List todos={this.state.todos}></List> }
        
      </div>
    );
  }
 componentDidMount(){
  this.handleLogin()
 }

}

export default App;
