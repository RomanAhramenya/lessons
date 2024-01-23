import { useState, useRef } from "react"
import style from './lesson.module.css'
import { ITodo } from "../../../types/data"

interface ITodoFormProps {
    setTodos: (todos: ITodo[]) => void
    todos: ITodo[]
}


const TodoForm = (props: ITodoFormProps) => {
    const { setTodos, todos } = props

    const [value, setValue] = useState('')
    const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null)

    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }

    const addTodo: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        if (value) {
            setTodos([...todos, {
                id: Date.now(),
                title: value,
                complete: false
            }])
        }
        setValue('')
    }


    return (

        <form onSubmit={e => addTodo(e)} className={style.lesson1__form}>
            <input ref={inputRef} className={style.lesson1__input} type="text" value={value} onChange={e => handlerChange(e)} placeholder="value" />
            <input type="submit" className={style.lesson1__btn} value='Добавить' />
        </form>

    )
}

export default TodoForm