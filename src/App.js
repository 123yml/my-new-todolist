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

  inputChange(newInput){
    this.state.inputValue = newInput;
  }

  handleAddClick(){
    const { todos } = this.state;
  }

  handleItemClick(id){
    console.log(id)
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
    return (
      <Fragment>
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
        <AddItem
          onClick={ this.handleAddClick.bind(this) }
          inputValue={ this.inputValue }
          onChange={ this.inputChange }
        >       
        </AddItem>
    </Fragment>
    )
  }
}

export default App;
