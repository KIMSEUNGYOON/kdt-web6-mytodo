import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import '../styles/AddTodo.scss';
const AddTodo = ({ addItem }) => {
    const [todoItem, setTodoItem] = useState({
        title: '',
    });

    const onButtonClick = () => {
        // 1. props addItem 함수 실행
        addItem(todoItem);
        // 2. input 초기화
        setTodoItem({
            title: '',
        });
    };

    const onEnterKeyDown = (e) => {
        if (e.key === 'Enter') {
            onButtonClick();
        }
    };

    return (
        <div className="AddTodo">
            <input
                type="text"
                placeholder="Add your new Todo"
                value={todoItem.title}
                onChange={(e) => setTodoItem({ title: e.target.value })}
                onKeyDown={onEnterKeyDown}
            />
            {todoItem.title.length === 0 && alert('값을 넣어주세요')};
            <button onClick={onButtonClick}>
                <AiOutlinePlus />
            </button>
        </div>
    );
};

export default AddTodo;
