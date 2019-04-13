import React from 'react';
import PropTypes from 'prop-types';

import '../atoms/theme/index.scss';
import 'font-awesome/css/font-awesome.min.css';
import * as _ from 'lodash';

import tasks from '../data/tasks';
import priorities from '../data/priorities.json';


// Components
import {
  Header,
  ListTask
} from '../components/index'



class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks,
      priorities
    };

    this.onHandleState = this.onHandleState.bind(this);
    this.complete = this.complete.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  complete(task) {

  }

  edit(task) {
    let newTask = {
      id: '4',
      name: 'isra',
      complete: 0,
      due: '02/12/34'
    }
    this.setState(this.state.tasks, () => {
      return this.state.tasks.push(newTask)
    });
  }

  delete(task) {
    this.setState(this.state.tasks, () => {
      return _.remove(this.state.tasks, item => task.id === item.id);
    });
  }

  onHandleState(type, task) {
    switch (type !== '') {
      case type === 'edit':
        this.edit(task);
      case type === 'delete':
        this.delete(task);
      default:
        this.complete(task);
    }
  }

  render() {

    return (

      <React.Fragment>
        <div className="content">
          <div className="content__container">
            <Header priorities={this.state.priorities} />
            <ListTask tasks={this.state.tasks} onHandleState={this.onHandleState} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;