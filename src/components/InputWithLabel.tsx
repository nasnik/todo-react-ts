import React, { useEffect, useRef } from 'react';
import styles from './InputWithLabel.module.css';
import PropTypes from 'prop-types';

const InputWithLabel = ({ todoTitle, handleTitleChange, children }) => {
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <>
            <label htmlFor="addTodoTitle" className={styles.Label}>{children}</label>
            <input
                id="addTodoTitle"
                name="title"
                type="text"
                value={todoTitle}
                onChange={handleTitleChange}
                ref={inputRef}
                className={styles.Input}
            />
        </>
    );
};

InputWithLabel.propTypes = {
    todoTitle: PropTypes.string.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default InputWithLabel;