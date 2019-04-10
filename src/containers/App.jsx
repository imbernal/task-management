import React from 'react';
import PropTypes from 'prop-types';

import '../atoms/theme/index.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      helloWorld: "Hello world!",
    };
  }

  render() {

    return (
      <div className="">
        {this.state.helloWorld}
      </div>
    );
  }
}

export default App;