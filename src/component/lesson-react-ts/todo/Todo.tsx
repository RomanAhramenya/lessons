import { useState } from "react"
import style from './lesson.module.css'
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import { ITodo } from "../../../types/data"




const Todo = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    const removeTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id: number): void => {
        setTodos(todos.map(todo => {
            if (todo.id !== id) return todo;
            return {
                ...todo,
                complete: !todo.complete
            }
        }))
    }

    return (
        <div className={style.lesson1__todo}>
            <TodoForm todos={todos} setTodos={setTodos} />
            <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
        </div>
    )
}

export default Todo