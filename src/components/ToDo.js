import React, {useState} from 'react';
import {Card, Divider} from 'antd';
import {ToDoItem} from './ToDoItem';
import {ToDoForm} from './ToDoForm';

export const ToDo = () => {
    const [todos, setTodos] = useState([
        {id: 1, name: 'some', desc: "desc", date: getDate(), checked: false},
        {id: 2, name: 'another one', desc: "desc", date: getDate(), checked: false}
    ]);
    const [idCount, setIdCount] = useState(10);

    const renderTodoItems = (todos) => {
        return (
            <ul className="todo-list">
                {todos.map(todo => <ToDoItem
                    key={todo.id}
                    item={todo}
                    onRemove={onRemove}
                    onCheck={onCheck}
                />)}
            </ul>
        )
    }

    const onRemoveChecked = () => {
        setTodos(todos.filter(item => !item.checked))
    }

    const onRemove = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        if (index !== -1) {
            todos.splice(index, 1);
            setTodos([...todos]);
        }
    }

    const onCheck = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        if (index !== -1) {
            const todo = todos[index];

            todo.checked = !todo.checked;
            todos.splice(index, 1, todo);

            setTodos([...todos]);
        }
    }

    function getDate() {
        let date = new Date()
        function validateDate(date) {
            if(date<10) {
                return `${date}`
            }else {
                return  date;
            }
        }

        const dateArr = date.toString().split(' ')
        console.log(dateArr)
        return` ${validateDate(dateArr[2])}.${validateDate(date.getMonth() + 1)}.${dateArr[3]} - ${dateArr[4]}`
    }


    const onSubmit = (name, desc) => {
        const todo = {
            name,
            desc,
            date: getDate(),
            id: idCount,
            checked: false
        };

        setTodos([...todos, todo]);
        setIdCount(idCount + 1);
    }

    const checkedItems = () => {
        return todos.reduce((count, item) => {
            if(item.checked)
                count++ 
        return count;
        }, 0)
    }

    return (
        <Card title={'My todos'} className="todo-card">
            {"Checked:" + checkedItems() || 0}
            <ToDoForm onSubmit={onSubmit} onRemoveChecked={onRemoveChecked}/>
            <Divider/>
            {renderTodoItems(todos)}
        </Card>
    );
}