import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
    <div className="header">

        <div className="header__title">
            <h1>{title}</h1>
        </div>
        <div className="header__options">
            <button className='btn btn__primary'>
                Add a New
            </button>
        </div>

    </div>
);

Header.propTypes = {
    title: PropTypes.string
};

Header.defaultProps = {
    title: "Task Management"
}

export default Header;