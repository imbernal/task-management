import React from 'react';
import PropTypes from 'prop-types';
import ModalTask from '../ModalTask/ModalTask';

const Header = ({ title, priorities }) => (
    <div className="header">
        <div className="header__logo">
            <img src="images/ge.png" alt="logo" />
        </div>
        <div className="header__title">
            <h1>{title}</h1>
        </div>
        <div className="header__options">
            <ModalTask priorities={priorities} />
        </div>

    </div>
);

Header.propTypes = {
    title: PropTypes.string,
    priorities: PropTypes.array.isRequired
};

Header.defaultProps = {
    title: "Task Management",
    priorities: []
}

export default Header;