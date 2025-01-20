import React, { Component, Fragment } from 'react';
import { formatDistanceToNow } from 'date-fns';
import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer';

export default class App extends Component {
  d = new Date(2025, 0, 18);
  state = { todoData: [
    { done: true, editMode: false,
      description: "Completed task 101", 
      createdAt: formatDistanceToNow(this.d, {includeSeconds: true}), id: 1},
    { done: false, editMode: true,
      description: "edit this task", 
      createdAt: this.printTime(this.d.setDate(this.d.getDate() - 5)), id: 2},
    { done: false, editMode: false,
      description: "Active task",
      createdAt: this.printTime(this.d), id: 3},
  ]}

  printTime(date) {
    let timing = formatDistanceToNow(date, {includeSeconds: true});
    return `Created ${timing} ago`;
  }

  updateTodo = (id, action, newValue) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);
      if (idx === -1) {
        console.log('Index not found');
        return { todoData };
      }
      const start = todoData.slice(0, idx);
      const end = todoData.slice(idx+1);
      let editedItem;

      switch(action) {
        case 'delete':  // delete item
          return {
            todoData: [...start, ...end]
          }
        case 'done':  // toggle done status
          if (todoData[idx].editMode) break;
          editedItem = {...todoData[idx], done: !todoData[idx].done};
          return {
            todoData: [...start, editedItem, ...end]
          }
        case 'edit':  // turn on edit mode
          if (todoData[idx].done) break;
          editedItem = {...todoData[idx], editMode: true};
          return {
            todoData: [...start, editedItem, ...end]
          }
        case 'patch':  // update description
          editedItem = {...todoData[idx], description: newValue, 
            editMode: false};
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
  toggleDone = (id) => {
    this.updateTodo(id, 'done')
  }
  editTask = (id, newValue) => {
    this.updateTodo(id, 'patch', newValue)
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className='main'>
          <TaskList 
            todos={this.state.todoData} 
            onDelete={this.deleteItem} 
            onDone={this.toggleDone}
            onEdit={this.editTask}
            turnOnEdit={this.turnOnEditMode} />
          <Footer />
        </section>
      </Fragment>
    );
  }
}