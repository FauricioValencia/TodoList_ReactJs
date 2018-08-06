import React, { Component } from 'react';
import './styles/App.css';

//hijos
import TodoBox from'./components/TodoBox';
import TodoList from './components/TodoList';

class App extends Component {
  constructor(){
    super();

    this.state={
      todoItems:[]
    }

    this.onSubmit=this.onSubmit.bind(this);
  }
  onSubmit(e){
    e.preventDefault();
    console.log('metodo del padre');

    let todoListValue = this.refs.todobox.getInputValue();
    let newTodoItemValue = this.state.todoItems.concat(todoListValue);

    this.setState({todoItems:newTodoItemValue});
    console.log(todoListValue);
  }
  render() {
    return (
      <div className="App">
      <h1 className="App-title">Lista de tareas por hacer</h1>
        <TodoBox ref="todobox"onSubmit={this.onSubmit}/>
        <TodoList ref="todolist"items= {this.state.todoItems}/>
      </div>
    );
  }
}

export default App;
