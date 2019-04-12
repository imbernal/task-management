import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const Task = ({ task, onHandleState }) => (

    <div className="card">
        <div className="card__header">
            <h2 className={`card__title  ${task.id === 1 ? 'card__due' : ''}`}>
                {task.name}
            </h2>
        </div>
        <div className="card__content">
            <ul>
                <li><strong>Due: </strong>
                    <Moment format="YYYY/MM/DD">{task.due}</Moment>
                </li>
                <li><strong>Complete: </strong>
                    {task.complete === 1 ? 'True' : "False"}
                </li>
                <li>
                    <strong>Assig To: </strong>
                    {task.assignTo}
                </li>
                <li><strong>Create By: </strong>
                    {task.createdBy}
                </li>
            </ul>
        </div>
        <div className="card__footer">
            <button onClick={() => onHandleState('complete', task)} className='btn btn__success btn__circle'>
                <i className="fa fa-check" aria-hidden="true"></i>
            </button>
            <button onClick={() => onHandleState('edit', task)} className='btn btn__primary btn__circle'>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => onHandleState('delete', task)} className='btn btn__danger btn__circle'>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </div>

);

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default Task;

