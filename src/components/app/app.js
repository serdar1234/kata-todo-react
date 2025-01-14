import React from 'react';
import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

const App = () => {

  const todoData = [
    { liClass: "completed", description: "Completed task", createdAt: "created 17 seconds ago"},
    { liClass: "editing", description: "Editing task", createdAt: "created 5 minutes ago"},
    { liClass: null, description: "Active task", createdAt: "created 5 minutes ago"},
  ]

  return (
    <div>
      <Header />
      <section className='main'>
        <TaskList todos={todoData} />
        <Footer />
      </section>
    </div>
  );
};

export default App;