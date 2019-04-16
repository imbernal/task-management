import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';


const Task = ({ task, onHandleState }) => (

    <div className="card">
        <div className="card__header">
            <h3 className="card__title">
                {task.name}
            </h3>
        </div>
        <div className="card__content">
            <ul>
                <li><strong>Due: </strong>
                    <i className={`card__content__due fa ${!moment(task.due).isAfter(moment(new Date())) ? 'fa-exclamation-circle' : ''}`} aria-hidden="true"></i>
                    {moment(task.due).format("YYYY/MM/DD")}
                </li>
                <li><strong>Status: </strong>
                    {task.complete ? 'Complete' : "Incomplete"}
                </li>
                <li>
                    <strong>Priority: </strong>
                    {task.priority}
                </li>
                <li><strong>Summary: </strong>
                    {task.summary}
                </li>
            </ul>
        </div>
        <div className="card__footer">
            <button onClick={() => onHandleState('complete', task)} className={`btn btn__circle btn__${task.complete ? 'success' : 'warning'}`} >
                <i className={`fa ${task.complete ? 'fa-lock' : 'fa-unlock-alt'}`} aria-hidden="true"></i>
            </button>
            <button onClick={() => onHandleState('setTask', task)} className='btn btn__default btn__circle'>
                <i className="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button onClick={() => onHandleState('delete', task)} className='btn btn__default btn__circle'>
                <i className="fa fa-trash" aria-hidden="true"></i>
            </button>
        </div>
    </div >

);

Task.propTypes = {
    task: PropTypes.object.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default Task;

