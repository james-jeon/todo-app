import React, { useCallback, useRef, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
    const [todo, setTodo] = useState('');
    const inputElement = useRef(null);
    const onChange = useCallback((e) => {
        setTodo(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        onInsert(todo);
        setTodo('');
        inputElement.current.focus();
        // submit 이벤트는 브라우저에서 새로고침을 방지한다. 이를 방지하기 위한 함수.
        e.preventDefault();
    }, [onInsert, todo]);
    
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" ref={inputElement} value={todo} onChange={onChange}/>
            <button type="submit"><MdAdd/></button>
        </form>
    );
}

export default TodoInsert;