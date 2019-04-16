import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, onOpenModal }) => (
    <div className="header">
        <div className="header__logo">
            <img src="images/ge.png" alt="logo" />
        </div>
        <div className="header__title">
            <h1>{title}</h1>
        </div>
        <div className="header__options">
            <button onClick={() => onOpenModal()} className='btn btn__primary btn__circle'>
                <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

        </div>

    </div>
);

Header.propTypes = {
    title: PropTypes.string,
    onOpenModal: PropTypes.func
};

Header.defaultProps = {
    title: "Task Management",
}

export default Header;