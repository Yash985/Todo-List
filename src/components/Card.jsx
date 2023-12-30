import { ToggleTodo,updateTodo,deleteTodo} from "../service/api";
import { useState } from "react";


const Card = (props) => {
    const [isDone, setIsDone] = useState(props.isDone);
    const [editing, setEditing] = useState(false);
    const [text,setText] = useState(props.task);

    const setToggleTodo = async () => {
        const res = await ToggleTodo(props.id);
        setIsDone(res?res.data.done:isDone);
    }

    const onFormSubmit =async(e) => {
       e.preventDefault();
        setEditing(prevState => !prevState);
        const res = await updateTodo(props.id, text);
        setText(res.data.task);
    }


    return (
        <li
            className="task"
            onClick={() => setToggleTodo()}
            style={{
                textDecoration: isDone && "line-through",
                color: isDone && "#ccc",
            }}
        >
            <span style={{ display: editing ? "none" : "" }}>{text}</span>
            
            <form
                style={{ display: editing ? "inline" : "none " }}
                onSubmit={(e)=>onFormSubmit(e)}
            >
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="edit-todo"
                />
            </form>
            
            <span className="icon" onClick={()=>deleteTodo(props.id)}>
            <i class="fa-regular fa-trash-can"></i>
            </span>
            <span className="icon" onClick={()=>setEditing(prevState=>!prevState)}> 
            <i class="fa-solid fa-pen"></i>
            </span>
        </li>

       
    );
}

export default Card;    