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
            due: {
                value: new Date(),
                require: true,
                hasError: false
            },
            priority: {
                value: '',
                require: true,
                hasError: false
            },
            name: {
                value: '',
                required: true,
                hasError: false
            },
            summary: {
                value: '',
                require: true,
                hasError: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formValidator = this.formValidator.bind(this);

    }

    handleChange(event) {

        if (isUndefined(_.get(event, 'target'))) {
            this.setState({
                due: {
                    value: event,
                    hasError: false,
                    ...this.state.due
                }
            });
        } else {

            const name = event.target.name;
            const value = event.target.value;

            this.setState({
                [name]: {
                    value: value,
                    hasError: false,
                    ...this.state.due
                }
            });
        }

    }

    formValidator() {

        let hasNotError = true;

        if (_.isNull(this.state.due.value) && this.state.due.require) {
            this.setState({

                due: {
                    ...this.state.due,
                    hasError: true

                }
            });
            hasNotError = false;

        }

        if (_.isEmpty(this.state.priority.value) && this.state.priority.require) {
            this.setState({
                priority: {
                    ...this.state.priority,
                    hasError: true
                }
            });
            hasNotError = false;
        }

        if (_.isEmpty(this.state.name.value) && this.state.name.required) {
            this.setState({
                name: {
                    ...this.state.name,
                    hasError: true
                }
            });
            hasNotError = false;
        }

        if (_.isEmpty(this.state.summary.value) && this.state.summary.require) {
            this.setState({
                summary: {
                    ...this.state.summary,
                    hasError: true
                }
            });
            hasNotError = false;
        }

        console.log(this.state)

        return hasNotError;

    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.formValidator()) {
            this.props.onHandleState('add', this.state);
        }

    }

    render() {

        return (
            <Popup
                open={this.props.openModal}
                onClose={this.props.closeModal}
                modal
                closeOnDocumentClick>

                <div className="modal">
                    <div className="modal__header">
                        <h2>Create Task</h2>
                    </div>
                    <div className="modal__content">
                        <form className="taskForm">
                            <div className="taskForm__topContent">

                                <div className="taskForm__name">
                                    <label className="label-form input-required" htmlFor="name">Name</label>
                                    <input
                                        name="name"
                                        onChange={this.handleChange}
                                        placeholder="Enter Name..."
                                        className={`form-input ${this.state.name.hasError ? 'required' : ''}`}
                                        id="name" />
                                </div>
                                <div className="taskForm__due">
                                    <label className="label-form input-required" htmlFor="due">Due</label>
                                    <DatePicker
                                        selected={this.state.due.value}
                                        onChange={this.handleChange}
                                        className={`form-input ${this.state.name.hasError ? 'required' : ''}`}
                                    />
                                </div>
                                <div className="taskForm__priority">
                                    <label className="label-form input-required" htmlFor="priority">Priority</label>
                                    <select
                                        onChange={this.handleChange}
                                        className={`form-input ${this.state.priority.hasError ? 'required' : ''}`}
                                        name="priority"
                                        id="priority">
                                        <option value=''>Select...</option>

                                        {this.props.priorities.map((priority, i) => <option key={i} value={priority.id}>{priority.name}</option>)}
                                    </select>
                                </div>

                                <div className="taskForm__summary">
                                    <label className="label-form input-required" htmlFor="summary">Summary</label>
                                    <textarea
                                        name="summary"
                                        onChange={this.handleChange}
                                        placeholder="Enter Summary..."
                                        className={`form-input ${this.state.summary.hasError ? 'required' : ''}`}
                                        id="summary"
                                        rows="10">
                                    </textarea>

                                </div>
                            </div>
                            <div className="modal__footer">
                                <button onClick={this.props.closeModal} className='btn btn__primary'>
                                    Cancel
                                </button>
                                <button onClick={this.handleSubmit} className='btn btn__success'>
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </Popup>
        );
    }
}

export default ModalTask;