import React, { Component, Fragment } from 'react';
import 'bulma/css/bulma.css'
import './App.css';
import ListItem from './Components/ListItem'
import AddItem from './Components/AddItem'

class App extends Component {
  constructor(){
    super()
    this.state = {
      todos: [
        {id: 1, title: '吃饭', isComplete: true},
        {id: 2, title: '睡觉', isComplete: false}
      ],
      inputValue: '',
      nextId: 3
    }
  }

  handleInputChange(newInput){
    this.setState({
      inputValue: newInput
    })
  }

  handleAddClick(){
    const { todos, inputValue, nextId } = this.state;
    if(inputValue){
      this.setState({
        todos:[
          ...todos,
          {
            id: nextId,
            title: inputValue,
            isComplete: false
          }
        ],
        nextId:nextId+1
      })
    }
  }

  handleItemClick(id){
    const { todos } = this.state;
    const newTodos = todos.map(curr => {
      return (
        curr.id === id
        ?
        {
          ...curr,
          isComplete: !curr.isComplete
        }
        :
        curr
      ) 
      
    })
    this.setState({
      todos: newTodos
    })
  }

  render() {
    const count = this.state.todos.length;
    return (
      <Fragment>
        <h1>Todo List <span>总任务数: {count}</span></h1>
        <AddItem
          onClick={ this.handleAddClick.bind(this) }
          inputValue={ this.inputValue }
          onChange={ this.handleInputChange.bind(this) }
        >       
        </AddItem>
        <ul>
          {
            this.state.todos.map(
              curr => {
                return (
                  <ListItem
                    key={ curr.id } 
                    id={ curr.id }
                    title={ curr.title }
                    isComplete={ curr.isComplete }
                    onClick={ this.handleItemClick.bind(this) }
                  >
                  </ListItem>
                )
            })
          }
        </ul>
        
    </Fragment>
    )
  }
}

export default App;
