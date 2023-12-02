import { ITodo } from "../../types/data"
import TodoItem from "./TodoItem"
import style from './lesson.module.css'
interface ITodoListProps {
    items: ITodo[]
}

const TodoList = (props: ITodoListProps) => {
    const { } = props

    return (
        <ul className={style.lesson1__list}>
            {props.items.map(el => <TodoItem key={el.id} {...el} />)}
        </ul>
    )
}

export default TodoList