import { useState } from 'react';
import { addTodo } from '../service/api';


const ToDoForm = () => {

    const [todo, setTodo] = useState({task:""});
    

    const onFormSubmit = (e) => {
        e.preventDefault();
        saveTodo();
        setTodo({
            task: "",
        });
        
    }

    const saveTodo = async ()=>{
        await addTodo(todo);
    }

    const onValueChange = (event) => {
        setTodo({ ...todo, [event.target.name]: event.target.value });
    }
    
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input 
                placeholder="Enter new ToDo...!" 
                className="input"
                onChange={onValueChange}
                name='task'
                value={todo.task}
            />
        </form>
    );
};

export default ToDoForm;