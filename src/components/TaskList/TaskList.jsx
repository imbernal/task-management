import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const TaskList = ({ tasks, onHandleState }) => (

    <div className="taskList">
        <div className="taskList__cards">
            {tasks.map((item, i) => <Task task={item} onHandleState={onHandleState} key={i} />)}
        </div>
    </div>
);

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default TaskList;