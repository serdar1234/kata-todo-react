import React from 'react';
import '../../index.css';
import Header from '../header';
import TaskList from '../task-list/task-list';
import Footer from '../footer/footer';

const App = () => {
  return (
    <div>
      <Header />
      <section className='main'>
        <TaskList />
        <Footer />
      </section>
    </div>
  );
};

export default App;