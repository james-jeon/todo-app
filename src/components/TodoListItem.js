import React, { useCallback } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;
    const onClick = () => {
        onRemove(id);
    };
    return (
        <div className="TodoListItem">
            <div className="checkbox" onClick={() => onToggle(id)}>
                {checked? <MdCheckBox/>: <MdCheckBoxOutlineBlank/>}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={onClick}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
};

export default TodoListItem;