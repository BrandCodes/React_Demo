import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Navigation from './Component/Navigation';
import { todos } from './todos.json';   //Data
import TodoForm from './Component/TodoForm.js'    //Componente

class App extends Component {
  constructor(){
    super();
    this.state={
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //Función que elimina a una tarjeta
  removeTodo (index){
    this.setState({
      //Recorre los elementos y si no se cumple con una condición no la devuelve (devuelve lo que será borrado).
      todos: this.state.todos.filter((e, i) => {    
        return i !== index
      }) 
    });
  }

  //Función que agrega una nueva tarjeta. Recibe un 'todo' como parametro.
  handleAddTodo(todo){
    this.setState({
      todos:[...this.state.todos, todo]     //Agrega directamente al estado para formar un nuevo arreglo.
    });
  }

  render() {
    const todos = this.state.todos.map((todo,i) => {    //Recorre las tareas una x una y al final regresa un arreglo de objetos.
      return (
        //Tarjeta
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-header">
              <h3>{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div className="card-body">
              <p>{todo.description}</p>
              <p><mark>{todo.responsible}</mark></p>
            </div>
            <div className="card-footer">
              <button className="btn btn-outline-danger btn-sm" 
                onClick={this.removeTodo.bind(this, i)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="App">
        <nav className="navbar navbar-white bg-white">
          <a href="#" className="text-black">
            Tareas
            <span className="badge badge-pill badge-dark ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text center">
              <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
