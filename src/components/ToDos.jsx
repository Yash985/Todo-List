
import { getTodos } from "../service/api";
import { useEffect, useState } from "react";
import Card from "./Card";
import Tabs from "./Tabs";




const ToDos = () => {
    const [todos, setTodos] = useState([]);
    const tabs = ["AllTodos", "ActiveTodos", "DoneTodos"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    useEffect(() => {
        getAllTodos();
    },[]);  
    
    const getAllTodos = async () => {
        const res = await getTodos();
        setTodos(res?res.data:[]);
    }

    const showTasks = async(tab) => {
        setActiveTab(tab);
        if (tab === "AllTodos") {
                await getAllTodos();
            } else if (tab === "ActiveTodos") {
                const activeTodos = todos.filter((todo) => !todo.done);
                setTodos(activeTodos);
            } else if (tab === "DoneTodos") {
                const doneTodos = todos.filter((todo) => todo.done);
                setTodos(doneTodos);
            }
    }


    return (
        <article>
            <div>
                {
                tabs.map((tab) => (
                <button
                    className={activeTab===tab ? "selected button":"button"}
                    onClick={() => showTasks(tab)}
                >{tab}</button>
            ))

                }
            </div>
            <ul>
            {
                todos.map((todo) => (
                    <Card key={todo._id} task={todo.task} isDone={todo.done} id={todo._id } />
                )) 
            }
            </ul>
        </article>
    )   
}

export default ToDos;
