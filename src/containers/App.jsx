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
  TaskList,
  TaskModal,
  PopUp
} from '../components/index'


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks,
      priorities,
      openModal: false,
      currentTask: null
    };

    this.onHandleState = this.onHandleState.bind(this);
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this)
    this.create = this.create.bind(this);
    this.complete = this.complete.bind(this);
    this.edit = this.edit.bind(this);
    this.delete = this.delete.bind(this);
    this.setCurrentTask = this.setCurrentTask.bind(this);
  }

  onOpenModal() {
    this.setState({ openModal: true })
  }

  setCurrentTask(task) {
    this.setState({
      currentTask: task,
      openModal: true
    })
  }

  onCloseModal() {

    this.setState({
      openModal: false,
      currentTask: null
    })
  }

  create(task) {
    this.setState(stateObj => {
      return { tasks: [...stateObj.tasks, task], openModal: false, currentTask: null };
    })

  }

  complete(task) {

    this.setState({
      tasks: _.map(this.state.tasks, item => {
        if (item.id === task.id) {
          item.complete = !item.complete
        }
        return item;
      })

    })

  }

  edit(task) {

    this.setState({
      tasks: _.map(this.state.tasks, item => item.id === task.id ? task : item),
      openModal: false,
      currentTask: null
    })
  }

  delete(task) {
    this.setState((stateObj) => {
      return _.remove(stateObj.tasks, item => task.id === item.id);
    });
  }

  onHandleState(type, task) {
    switch (type !== '') {
      case type === 'create':
        this.create(task);
        break;
      case type === 'edit':
        this.edit(task);
        break;
      case type === 'delete':
        this.delete(task);
        break;
      case type === 'setTask':
        this.setCurrentTask(task);
        break;
      case type === 'complete':
        this.complete(task);
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
            <TaskList tasks={this.state.tasks} onHandleState={this.onHandleState} />
            <PopUp openModal={this.state.openModal} onCloseModal={this.onCloseModal}>
              <TaskModal
                priorities={this.state.priorities}
                currentTask={this.state.currentTask}
                onHandleState={this.onHandleState}
                onOpenModal={this.onOpenModal}
                onCloseModal={this.onCloseModal}
              />
            </PopUp>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;