import React, { Component } from "react";
import '../../index.css';
import Task from "../task";

export default class MyTaskList extends Component {

  render() {
    const { todos, onDelete } = this.props;
  
    return (
      <ul className="todo-list">
        { todos.map((item) => < Task info={item}
        onDelete={() => (onDelete(item.id))} key={item.id} />) }
      </ul>
    )
  }
}