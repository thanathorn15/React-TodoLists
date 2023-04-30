
import { AddTodo } from './AddTodo';
import { TodoHeader } from './TodoHeader';
import { TodoLists } from './TodoLists';
// import mockData from '../../data/todos.json';

export function TodoContent({todos,setTodos,setFilterList}) {
    // # Logic

    // UPDATE-TODO
    // updateValue = {task: "Newtask", status : false}
    const handleEditTodo = (todoId,updateObj) => {

        
        console.log(todoId)
        const foundedIndex = todos.findIndex(todoObj=> todoObj.id === todoId)
        console.log(foundedIndex)
        if(foundedIndex === -1) return;
        const newTodos = [...todos]
      
        newTodos[foundedIndex] = { ...newTodos[foundedIndex], ...updateObj } // ...{task: "Newtask", status : false}
        newTodos[foundedIndex] = Object.assign({},newTodos[foundedIndex],updateObj)
        
        // console.log(newTodos[foundedIndex])
        setTodos(newTodos)
        setFilterList(newTodos)
    }

    // Delete UI 
    const handleDelete = (todoId) => {
        // #2
        setTodos(curr=> curr.filter((todoObj)=> todoObj.id !== todoId))
        setFilterList(curr=> curr.filter((todoObj)=> todoObj.id !== todoId))
    }
 

    // # UI
    return (
        <main className='content'>
            <TodoHeader title="Inbox"/>
            <AddTodo   setTodos={setTodos} setFilterList={setFilterList}/>
            <TodoLists todos={todos}  onEditTodo={handleEditTodo} onDeleteTodo={handleDelete}/>
        </main>
    );
}
