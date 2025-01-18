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

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex(item => item.id === id);
      const start = todoData.slice(0, idx);
      const end = todoData.slice(idx+1);
      return {
        todoData: [...start, ...end]
      }
    }) 
  }

  render() {
    return (
      <Fragment>
        <Header />
        <section className='main'>
          <TaskList 
          todos={this.state.todoData} 
          onDelete={this.deleteItem} />
          <Footer />
        </section>
      </Fragment>
    );
  }
}