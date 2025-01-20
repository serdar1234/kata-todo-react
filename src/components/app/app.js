import React, { Component, Fragment } from 'react';
import { formatDistanceToNow } from 'date-fns';
import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer';

export default class App extends Component {
  d = new Date(2025, 0, 18);
  state = { todoData: [
    { liClass: "completed", description: "Completed task 101", 
      createdAt: formatDistanceToNow(this.d, {includeSeconds: true}), id: 1},
    { liClass: "editing", description: "Editing task", 
      createdAt: this.printTime(this.d.setDate(this.d.getDate() - 5)), id: 2},
    { liClass: null, description: "Active task",
      createdAt: this.printTime(this.d), id: 3},
  ]}

  printTime(date) {
    let timing = formatDistanceToNow(date, {includeSeconds: true});
    return `Created ${timing} ago`;
  }

  updateTodo = (id, action) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);
      if (idx === -1) {
        console.log('Index not found');
        return { todoData };
      }
      const start = todoData.slice(0, idx);
      const end = todoData.slice(idx+1);

      switch(action) {
        case 'delete':  // delete item
          return {
            todoData: [...start, ...end]
          }
        case 'edit':  // turn on edit mode
          const editedItem = {...todoData[idx], liClass: "editing"};
          return {
            todoData: [...start, editedItem, ...end]
          }
        default:  // do nothing
          console.log('Action not found');
          return {
            todoData
          }
      }
    }) 
  }
  deleteItem = (id) => { 
    this.updateTodo(id, 'delete')
  }
  turnOnEditMode = (id) => {
    this.updateTodo(id, 'edit')
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className='main'>
          <TaskList 
          todos={this.state.todoData} 
          onDelete={this.deleteItem} 
          onEdit={this.turnOnEditMode} />
          <Footer />
        </section>
      </Fragment>
    );
  }
}