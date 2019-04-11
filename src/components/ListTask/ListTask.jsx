import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task/Task';

import listTaskStyle from './listTask.module.scss';

const ListTask = ({ tasks, onHandleState }) => (

    <div className="listTask">
        <div className="table">
            <ul className='table__head'>
                <li className='table__th'>
                    Name
                </li>
                <li className='table__th'>
                    Due
                </li>
                <li className='table__th'>
                    Status
                </li>
                <li className='table__th'>
                    Actions
                </li>
            </ul>
            <div className="table__body">
                {tasks.map((item, i) => <Task task={item} onHandleState={onHandleState} key={i} />)}
            </div>

        </div>
    </div>
);

ListTask.propTypes = {
    tasks: PropTypes.array.isRequired,
    onHandleState: PropTypes.func.isRequired
};

export default ListTask;