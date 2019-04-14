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
  ListTask,
  ModalTask
} from '../components/index'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks,
      priorities,
      openModal: false
    };

    this.onHandleState = this.onHandleState.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this)
    this.add = this.add.bind(this);
    this.complete = this.complete.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
  }

  onOpenModal() {
    this.setState({ openModal: true })
  }

  onCloseModal() {

    this.setState({ openModal: true })
  }

  add(task) {
    this.setState({ openModal: false })
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
    this.setState((stateObj) => {
      return stateObj.tasks.push(newTask)
    });
  }

  delete(task) {
    this.setState((stateObj) => {
      return _.remove(stateObj.tasks, item => task.id === item.id);
    });
  }

  onHandleState(type, task) {
    switch (type !== '') {
      case type === 'add':
        add(task);
        break;
      case type === 'edit':
        this.edit(task);
        break;
      case type === 'delete':
        this.delete(task);
        break;
      default:
        break;
    }
  }

  render() {

    return (

      <React.Fragment>
        <div className="content">
          <div className="content__container">
            <Header onOpenModal={this.onOpenModal} />
            <ListTask tasks={this.state.tasks} onHandleState={this.onHandleState} />
            <ModalTask

              priorities={this.state.priorities}
              onHandleState={this.onHandleState}
              openModal={this.state.openModal}
              onOpenModal={this.onOpenModal}
              onCloseModal={this.onCloseModal} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;