import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onHandleState }) => (
    <ul>
        <li className="table__td" onClick={() => onHandleState('complete', task)}>
            {task.name}
        </li>
        <li className="table__td">
            {task.due}
        </li>
        <li className="table__td">
            {task.complete}
        </li>
        <li className="table__td">
            <div onClick={() => onHandleState('edit', task)} className="delete">Edit</div>
            <div onClick={() => onHandleState('delete', task)} className="delete">Delete</div>
        </li>
    </ul>
);

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default Task;

