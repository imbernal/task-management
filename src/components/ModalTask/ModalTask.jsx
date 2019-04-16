import React from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid";
import moment from 'moment';
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
                value: this.getCurrentValue('priority'),
                require: true,
                hasError: false
            },
            name: {
                value: this.getCurrentValue('name'),
                required: true,
                hasError: false
            },
            summary: {
                value: this.getCurrentValue('priority'),
                require: true,
                hasError: false
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.formValidator = this.formValidator.bind(this);
        this.getCurrentValue = this.getCurrentValue.bind(this);

    }

    getCurrentValue(field) {
        return _.isNull(this.props.currentTask) ? '' : _.get(this.props.currentTask, field);
    }

    handleChange(event) {

        if (isUndefined(_.get(event, 'target'))) {
            this.setState({
                due: {
                    value: event,
                    hasError: false,
                    require: true
                }
            });
        } else {

            const name = event.target.name;
            const value = event.target.value;

            if (!_.isNull(this.props.currentTask))
                this.props.currentTask[name] = value;

            this.setState({

                [name]: {
                    value: value,
                    hasError: false,
                    require: true
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
                    hasError: true,

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

        return hasNotError;

    }

    handleSubmit(e) {

        e.preventDefault();

        if (this.formValidator()) {

            const method = _.isNull(this.props.currentTask) ? 'create' : 'edit';

            this.props.onHandleState(method, {
                id: method === 'create' ? uuid.v4() : this.getCurrentValue('id'),
                name: _.get(this.state, 'name.value'),
                complete: 0,
                priority: _.get(this.state, 'priority.value'),
                summary: _.get(this.state, 'summary.value'),
                due: moment(_.get(this.state, 'due.value')).format()
            });
        }

    }

    render() {

        const { priorities, onCloseModal } = this.props;

        return (
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
                                    defaultValue={this.getCurrentValue('name')}
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
                                    defaultValue={this.getCurrentValue('priority')}
                                    id="priority">
                                    <option value=''>Select...</option>

                                    {priorities.map((priority, i) => {
                                        return <option key={i} value={priority.name}>{priority.name}</option>
                                    })}
                                </select>
                            </div>

                            <div className="taskForm__summary">
                                <label className="label-form input-required" htmlFor="summary">Summary</label>
                                <textarea
                                    name="summary"
                                    defaultValue={this.getCurrentValue('summary')}
                                    onChange={this.handleChange}
                                    placeholder="Enter Summary..."
                                    className={`form-input ${this.state.summary.hasError ? 'required' : ''}`}
                                    id="summary"
                                    rows="10">
                                </textarea>

                            </div>
                        </div>
                        <div className="modal__footer">
                            <button onClick={() => onCloseModal()} className='btn btn__primary'>
                                Cancel
                                </button>
                            <button onClick={this.handleSubmit} className='btn btn__success'>
                                Save
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        );
    }
}

export default ModalTask;