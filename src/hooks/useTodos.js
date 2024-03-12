import { useEffect, useState } from "react";
import axios from 'axios';

export default function useTodos(n) {
    const [loading, setLoading] = useState(true)
    const [todos, setTodos] = useState([]);

    function getData() {      
            axios.get("https://sum-server.100xdevs.com/todos")
                .then(res => setTodos(res.data.todos))
                setLoading(false)
    }
    useEffect(() => {
        const interval = setInterval(() => {
            getData()
        }, n * 1000)
        getData()
        return () => {
            clearInterval(interval)
        }
    }, [n])


    return {
        todos: todos,
        loading: loading
    };
}