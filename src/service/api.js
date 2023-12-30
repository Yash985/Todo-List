
import axios from 'axios'; 

const URL = "http://localhost:8000";

export const addTodo = async(data)=> {
    try {
        return await axios.post(`${URL}/addTodo`, data);
    } catch (error) {
        console.log("Error while calling addTodo API");
    }
}


export const getTodos = async () => {
    try {
        return await axios.get(`${URL}/getTodos`);
    } catch (error) {
        console.log("Error while calling getTodos API");
    }
}

export const ToggleTodo = async (id) => {
    try {
        return await axios.get(`${URL}/toggleTodo/${id}`);
    } catch (error) {
        console.log("Error while calling toggleTodo API");
    }
}


export const updateTodo = async (id, data) => {
    try {
        return await axios.put(`${URL}/updateTodo/${id}`, { data } );
    } catch (error) {
        console.log("Error while calling updateTodo API");
    }
}  


export const deleteTodo = async (id) => {
    try {
        return await axios.delete(`${URL}/deleteTodo/${id}`);
    } catch (error) {
        
    }
}