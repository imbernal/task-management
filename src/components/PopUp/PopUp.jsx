import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup'


const PopUp = ({ openModal, closeModal, children }) => (
    <Popup
        open={openModal}
        onClose={closeModal}
        modal
        closeOnDocumentClick={false}>
        {children}
    </Popup>
);

PopUp.propTypes = {};

export default PopUp;

