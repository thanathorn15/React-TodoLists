import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
import mockData from '../../data/todos.json';

export function TodoContent() {
    // # Logic
    const [todos, setTodos] = useState(mockData);

    // ADD-TODO
    const handleAddTodo = (newTask) => {
        // มี new todo
        let newTodoObj = { id: uuidv4(), task: newTask, status: false, due_date: '' };

        // สร้าง state ใหม่
        // update state โดย new state
        // const newTodos = [newTodoObj, ...todos];
        // setTodos(newTodos);

        // update state โดย callback
        setTodos(currentState=> [newTodoObj,...currentState])
    };

    // UPDATE-TODO
    const handleEditTodo = (todoId,newTask) => {
        console.log("##",todoId,newTask)

        // Modify Array 
        // #1 FindIndex
        const foundedIndex = todos.findIndex(todoObj=> todoObj.id === todoId)

        // Not founded
        if(foundedIndex === -1) return;

        // Founded
        const newTodos = [...todos]
        // let oldTodoObj = newTodos[foundedIndex]
        // oldTodoObj.task = newTask
        newTodos[foundedIndex] = { ...newTodos[foundedIndex], task : newTask}
        // { "id": 4, "task": "In congue. Etiam justo.", "status": false, "due_date": "2023-05-04" },
        setTodos(newTodos)
    }


    // # UI
    return (
        <main className='content'>
            <TodoHeader />
            <AddTodo  onAddTodo={handleAddTodo}/>
            <TodoLists todos={todos}  onEditTodo={handleEditTodo}/>
        </main>
    );
}
