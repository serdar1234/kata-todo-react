import React, { Component, Fragment } from 'react';
import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer';

export default class App extends Component {

  state = { todoData: [
    { liClass: "completed", description: "Completed task 1", createdAt: "created 17 seconds ago", id: 1},
    { liClass: "editing", description: "Editing task", createdAt: "created 5 minutes ago", id: 2},
    { liClass: null, description: "Active task", createdAt: "created 5 minutes ago", id: 3},
  ]}

  render() {
    return (
      <Fragment>
        <Header />
        <section className='main'>
          <TaskList todos={this.state.todoData} />
          <Footer />
        </section>
      </Fragment>
    );
  }
}