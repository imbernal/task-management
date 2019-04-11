import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ title }) => (
    <div className="footer">
        <p>{title}</p>
    </div>
);

Footer.propTypes = {
    title: PropTypes.string
};

Footer.defaultProps = {
    title: '© 2019 Task Management.All rights reserved.'
}

export default Footer;

