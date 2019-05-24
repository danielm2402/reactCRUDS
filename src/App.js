import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.state.todos.splice(index, 1);  ///Elimino el objeto del arreglo de ToDos
    this.setState({
      ToDos: this.state.ToDos //Refresco la información para que React lo detecte y aplique el renderizado
    });
  }
  
  actualizarTodo(index){
    var elemento = this.state.todos[index];
    console.log(elemento.title);
    
  
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.nombre}</h3>
              <span className="badge badge-warning">
                {todo.codigo}
              </span>
            </div>
            <div className="card-body">
              {todo.numero1}
            </div>
            <div className="card-footer">
              <button
                className="btn btn-info"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
              <button
                className="btn btn-info"
                onClick={this.actualizarTodo.bind(this, i)}>
                Actualizar
              </button>
            </div>
          </div>
        </div>
      )
    });

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <span className="badge badge-pill badge-light ml-2">
                C R U D S 
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                
              <TodoForm onAddTodo={this.handleAddTodo} id="frm"></TodoForm>
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
