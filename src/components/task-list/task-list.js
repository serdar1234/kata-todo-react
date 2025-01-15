import React, { Component } from "react";
import '../../index.css';
import Task from "../task";

export default class MyTaskList extends Component {

  render() {
    const { todos } = this.props;
  
    return (
      <ul className="todo-list">
        { todos.map((item) => < Task info={item} />) }
      </ul>
    )
  }
}

// const TaskList = ({todos}) => {

//   const elements = todos.map((item) => {
//     return < Task info={item} />
//   })

//   return (
//     <ul className="todo-list">
//       { elements }
//     </ul>
//   )
// }

// export default TaskList;