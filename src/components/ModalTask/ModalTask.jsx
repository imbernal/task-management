import React from 'react';
import PropTypes from 'prop-types';

import Popup from 'reactjs-popup'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

import { isUndefined } from 'lodash';


class ModalTask extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            due: new Date(),
            priority: '',
            summary: '',
            name: '',
            isRequired: {
                priority: false,
                summary: false,
                name: false
            }

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formValidator = this.formValidator.bind(this);

    }

    handleChange(event) {

        if (isUndefined(event.target)) {
            this.setState({
                due: event
            });
        } else {

            const name = event.target.name;
            const value = event.target.value;

            this.setState({
                [name]: value
            });
        }

        console.log(this.state);
    }

    formValidator() {

        if (_.isEmpty(this.state.priority)) {
            this.state.isRequired.priority = true;
            return false;
        }

        if (_.isEmpty(this.state.summary)) {
            this.state.isRequired.priority = true;
            return false;
        }

        return true;

    }

    handleSubmit(e) {

        if (this.formValidator()) {
            console.log('paso');
            e.preventDefault();
        } else {
            console.log(this.state);
        }

        e.preventDefault();

    }

    render() {

        return (
            <Popup
                trigger={
                    <button className='btn btn__primary btn__circle'>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                }
                modal
                closeOnDocumentClick>
                {close => (
                    <div className="modal">
                        <div className="modal__header">
                            <h2>Create Task</h2>
                        </div>
                        <div className="modal__content">
                            <form onSubmit={this.handleSubmit} className="taskForm">
                                <div className="taskForm__topContent">

                                    <div className="taskForm__name">
                                        <label className="label-form" htmlFor="name">Name</label>
                                        <input
                                            name="name"
                                            onChange={this.handleChange}
                                            placeholder="Enter Name..."
                                            className={`form-input ${this.state.isRequired.name ? 'required' : ''}`}
                                            id="name" />


                                    </div>
                                    <div className="taskForm__due">
                                        <label className="label-form" htmlFor="due">Due</label>
                                        <DatePicker
                                            className="form-input"
                                            selected={this.state.due}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="taskForm__priority">
                                        <label className="label-form" htmlFor="priority">Priority</label>
                                        <select
                                            onChange={this.handleChange}
                                            className={`form-input ${this.state.isRequired.priority ? 'required' : ''}`}
                                            name="priority"
                                            id="priority">
                                            <option value=''>Select...</option>

                                            {this.props.priorities.map(priority => {
                                                <option value={priority.id}>{priority.name}</option>
                                            })}
                                        </select>
                                    </div>

                                    <div className="taskForm__summary">
                                        <label className="label-form" htmlFor="summary">Summary</label>
                                        <textarea
                                            name="summary"
                                            onChange={this.handleChange}
                                            placeholder="Enter Summary..."
                                            className={`form-input ${this.state.isRequired.summary ? 'required' : ''}`}
                                            id="summary"
                                            rows="10">
                                        </textarea>

                                    </div>
                                </div>
                                <div className="modal__footer">
                                    <button onClick={close} className='btn btn__primary'>
                                        Cancel
                                    </button>
                                    <button className='btn btn__success'>
                                        Save
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                )}


            </Popup>
        );
    }
}

export default ModalTask;