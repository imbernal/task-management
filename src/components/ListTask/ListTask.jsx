import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

const ListTask = ({ tasks, onHandleState }) => (

    <div className="listTask">
        <div className="listTask__cards">
            {tasks.map((item, i) => <Task task={item} onHandleState={onHandleState} key={i} />)}
        </div>
    </div>
);

ListTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default ListTask;