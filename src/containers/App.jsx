import React from 'react';
import PropTypes from 'prop-types';

import '../atoms/theme/index.scss';
import 'font-awesome/css/font-awesome.min.css';

// Components
import {
  Header,
  Footer,
  ListTask
} from '../components/index'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          id: "1",
          name: "This is my task 1",
          complete: "Completed",
          due: '04/10/2019'
        },
        {
          id: "2",
          name: "This is my task 2",
          complete: "Incompleted",
          due: '04/10/2019'
        },
        {
          id: "3",
          name: "This is my task 3",
          complete: "Completed",
          due: '04/10/2019'
        },
        {
          id: "4",
          name: "This is my task 4",
          complete: "Completed",
          due: '04/10/2019'
        }
      ]
    };

    this.onHandleState = this.onHandleState.bind(this);
  }

  onHandleState(type, task) {

    console.log(type, task)

  }

  render() {

    return (

      <React.Fragment>
        <div className="content">
          <div className="content__container">
            <Header />
            <ListTask tasks={this.state.tasks} onHandleState={this.onHandleState} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;