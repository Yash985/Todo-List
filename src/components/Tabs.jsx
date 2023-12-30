
import React, { useState } from "react";

const Tabs = () => {

    const tabs = ["AllTodos", "ActiveTodos", "DoneTodos"];
    const [activeTab, setActiveTab] = useState(tabs[0]);

    // const getAllTodos = async () => {
    //     const res = await getTodos();
    //     setTodos(res?res.data:[]);
    // }

    const showTasks = async(tab) => {
        setActiveTab(tab);
    }
    
            // if (tab === "AllTodos") {
            //     await getAllTodos();
            // } else if (tab === "ActiveTodos") {
            //     const activeTodos = todos.filter((todo) => !todo.done);
            //     setTodos(activeTodos);
            // } else if (tab === "DoneTodos") {
            //     const doneTodos = todos.filter((todo) => todo.done);
            //     setTodos(doneTodos);
            // }
    

    
    return (
            tabs.map((tab) => (
                <button
                    className={activeTab===tab ? "selected button":"button"}
                    onClick={() => showTasks(tab)}
                >{tab}</button>
            ))
            );

};

export default Tabs;