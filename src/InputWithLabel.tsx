import React, {useEffect, useRef} from 'react';
import {InputWithLabelProps} from "./types.ts";

const InputWithLabel: React.FC<InputWithLabelProps> = ({todoTitle, handleTitleChange, children}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus();
    })
    return (
        <>
            <label htmlFor="addTodoTitle">{children}</label>
            <input id="addTodoTitle" name="title" type="text" value={todoTitle} onChange={handleTitleChange} ref={inputRef}/>
        </>
    );
};

export default InputWithLabel;