import React, {useEffect, useRef} from 'react';
import styles from './InputWithLabel.module.css';
import {InputWithLabelProps} from "./types.ts";

const InputWithLabel: React.FC<InputWithLabelProps> = ({todoTitle, handleTitleChange, children}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    })
    return (
        <>
            <label htmlFor="addTodoTitle" className={styles.Label}>{children}</label>
            <input id="addTodoTitle" name="title" type="text" value={todoTitle} onChange={handleTitleChange} ref={inputRef} className={styles.Input}/>
        </>
    );
};

export default InputWithLabel;