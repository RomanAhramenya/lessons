import { ITodo } from "../../../types/data"
import TodoItem from "./TodoItem"
import style from './lesson.module.css'
interface ITodoListProps {
    items: ITodo[]
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoList = (props: ITodoListProps) => {
    const { items, removeTodo, toggleTodo } = props

    return (
        <ul className={style.lesson1__list}>
            {items.map(todo => <TodoItem key={todo.id} {...todo} removeTodo={removeTodo} toggleTodo={toggleTodo} />)}
        </ul>
    )
}

export default TodoList