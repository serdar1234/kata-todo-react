import React, { Component } from "react";
import '../../index.css';
import TasksFilter from '../tasks-filter';
export default class MyFooter extends Component {
  toggleFilters = this.props.toggleFilters;
  render() {
    return (
      <footer className="footer">
        <span className="todo-count">1 items left</span>
        <TasksFilter toggleFilters={(num) => this.toggleFilters(num)} />
        <button className="clear-completed">Clear completed</button>
      </footer>
    )
  }
}

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <span className="todo-count">1 items left</span>
//       <TasksFilter />
//       <button className="clear-completed">Clear completed</button>
//     </footer>
//   ) 
// }

// export default Footer;