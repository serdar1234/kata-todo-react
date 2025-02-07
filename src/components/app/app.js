import React, { Component } from 'react';

import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer';

export default class App extends Component {
  minID = 100;

  state = {
    todoData: [],
    filterState: 0, // 0 = show all, 1 = show active, 2 = show done
  };

  updateTodo = (id, action, newValue) => {
    return this.setState(({ todoData }) => {
      const idx = todoData.findIndex((item) => item.id === id);
      if (idx === -1) {
        return { todoData };
      }
      const start = todoData.slice(0, idx);
      const end = todoData.slice(idx + 1);
      let editedItem;

      switch (action) {
        case 'delete': // delete item
          return {
            todoData: [...start, ...end],
          };
        case 'done': // toggle done status
          if (todoData[idx].editMode) break;
          editedItem = { ...todoData[idx], done: !todoData[idx].done, timer: 0 };

          return {
            todoData: [...start, editedItem, ...end],
          };
        case 'edit': // turn on edit mode
          if (todoData[idx].done) break;
          editedItem = { ...todoData[idx], editMode: true };
          return {
            todoData: [...start, editedItem, ...end],
          };
        case 'timer': // edit timer
          editedItem = { ...todoData[idx], timer: newValue };
          return {
            todoData: [...start, editedItem, ...end],
          };
        case 'patch': // update description
          editedItem = { ...todoData[idx], description: newValue, editMode: false };
          return {
            todoData: [...start, editedItem, ...end],
          };
        default: // do nothing
          return {
            todoData,
          };
      }
    });
  };

  deleteItem = (id) => {
    this.updateTodo(id, 'delete');
  };

  turnOnEditMode = (id) => {
    this.updateTodo(id, 'edit');
  };

  toggleDone = (id) => {
    this.updateTodo(id, 'done');
  };

  editTask = (id, newValue) => {
    this.updateTodo(id, 'patch', newValue);
  };

  addItem = ({ title, minutes = 0, seconds = 0 }) => {
    this.minID += 1;
    const timer = Number(minutes) * 60 + Number(seconds);
    const newTask = {
      timer,
      done: false,
      editMode: false,
      description: title,
      createdAt: new Date(),
      id: this.minID,
    };
    this.setState(() => {
      return {
        todoData: [...this.state.todoData, newTask],
      };
    });
  };

  editTimer = (id, newValue) => {
    this.updateTodo(id, 'timer', newValue);
  };

  showActive = (num) => {
    this.setState({ filterState: num });
  };

  deleteInactive = () => {
    this.setState(() => {
      const newState = this.state.todoData.filter((task) => !task.done);
      return {
        todoData: newState,
      };
    });
  };

  countActive = () => {
    return this.state.todoData.reduce((acc, task) => (!task.done ? acc + 1 : acc), 0);
  };

  render() {
    const counter = this.countActive();

    return (
      <>
        <Header onCreate={this.addItem} />
        <section className="main">
          <TaskList
            tasks={this.state.todoData}
            filterState={this.state.filterState}
            onDelete={this.deleteItem}
            onDone={this.toggleDone}
            onEdit={this.editTask}
            editTimer={this.editTimer}
            turnOnEdit={this.turnOnEditMode}
          />
          <Footer toggleFilters={this.showActive} onClearInactive={this.deleteInactive} counter={counter} />
        </section>
      </>
    );
  }
}
