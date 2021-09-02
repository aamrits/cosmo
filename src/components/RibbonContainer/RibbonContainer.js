import React, { useState } from 'react';
import './styles.scss';

const RibbonContainer = (props) => {

    const openModal = () => {
        document.querySelector('.modal-container').classList.remove('close');
        document.querySelector('.modal-container').classList.add('open');
    }

    const closeModal = () => {
        document.querySelector('.modal-container').classList.remove('open');
        document.querySelector('.modal-container').classList.add('close');
    }

    return (
        <div className="ribbon-container">
            <p onClick={openModal}>
                {props.text ? props.text : 'Default' }
            </p>

            <div className="modal-container">
                <p onClick={closeModal}>X</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
            </div>
        </div>
    )
}

export default RibbonContainer