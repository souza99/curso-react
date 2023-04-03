
import { Component } from 'react';

import './styles.css';

export const Button = (props) => {

    const { text, onClick, disabled } = props;

    return (
        <button
            className='button'
            onClick={onClick}
            disabled={disabled}>
            {text}
        </button>
    );
}
