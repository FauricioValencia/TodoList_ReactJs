import React,{Component} from 'react';
import PropTypes from 'prop-types';
import "../styles/TodoListItem.css";
class TodoListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className="item">{this.props.name}</li>
        );
    }
}

TodoListItem.propTypes={
    name:PropTypes.string.isRequired
}

export default TodoListItem;