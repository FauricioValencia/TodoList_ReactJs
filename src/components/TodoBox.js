import React, { Component } from "react";
import PropTypes from 'prop-types'
import "../styles/TodoBox.css";

class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };
    this.onSubmit=this.onSubmit.bind(this);
  }
  // onSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(e);//asi se pasa el metodo por props al padre
  // }
  onSubmit(e){
    e.preventDefault();
    this.props.onSubmit(e);
    this.setState({ todoText: '' })
  }
  getInputValue(){
    return this.state.todoText;
  }
  render() {
    return (
      <div className="TodoBox">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.todoText}
            onChange={e => {
              this.setState({ todoText: e.target.value });
            }}
          />
          <input type="submit" value="Agregar" />
        </form>
      </div>
    );
  }
}
//que propiedades va a recibir el componente
TodoBox.propTypes ={
  onSubmit: PropTypes.func.isRequired
}

export default TodoBox;
