import styles from './AddTodo.module.scss';
import { useState } from 'react';
import { TodoForm } from './TodoForm';

export function AddTodo() {
    // # Logic & State
    const [isAddMode, setIsAddMode] = useState(false);

    const handleClickToAddTask =() => {
setIsAddMode(true)
    }

    // # UI
    return (
        <>
            {!isAddMode ? (
                <div className={styles.add__todo} onClick={handleClickToAddTask}>
                    <span>+</span>
                    <h3>Add task</h3>
                </div>
            ) : (
                <TodoForm onSetIsAddMode={setIsAddMode}/>
            )}
        </>
    );
}
