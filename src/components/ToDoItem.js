import React from 'react';
import {Button, Checkbox} from 'antd';

export const ToDoItem = (props) => {
    const {item, onCheck, onRemove} = props;
    const onRemoveItem = (e) => {
        e.preventDefault();

        if (onRemove) {
            onRemove(item.id);
        }
    }

    const onCheckItem = () => {
        if (onCheck) {
            onCheck(item.id);
        }
    }


    const getItemInfo = () => {
        return <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "400px"}}>
            <span>{item.name}</span> <span style={{background: "whitesmoke"}}>{item.date}</span>
            <span>{item.desc}</span></div>
    }


    return (
        <li className="todo-item"
            key={item.id}
            style={{
                textDecoration: item.checked ? 'line-through' : 'none',

            }}>
            <Checkbox
                style={{color: item.checked ? "darkred" : "black"}}
                checked={item.checked}
                onChange={onCheckItem}
            >{getItemInfo()}</Checkbox>
            <Button danger onClick={onRemoveItem}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 30 30" width="20px" height="20px">
                    <path
                        d="M 13 3 A 1.0001 1.0001 0 0 0 11.986328 4 L 6 4 A 1.0001 1.0001 0 1 0 6 6 L 24 6 A 1.0001 1.0001 0 1 0 24 4 L 18.013672 4 A 1.0001 1.0001 0 0 0 17 3 L 13 3 z M 6 8 L 6 24 C 6 25.105 6.895 26 8 26 L 22 26 C 23.105 26 24 25.105 24 24 L 24 8 L 6 8 z"/>
                </svg>
            </Button>
        </li>
    )
}