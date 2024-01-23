import { ITodo } from "../../../types/data"
import style from './lesson.module.css'
import closeImg from './../../../assets/images/todo/close.png'
import { useEffect, useRef } from "react"
interface ITodoItemProps extends ITodo {
    removeTodo: (id: number) => void
    toggleTodo: (id: number) => void
}

const TodoItem = (props: ITodoItemProps) => {
    const { id, title, complete, removeTodo, toggleTodo } = props
    const liRef: React.LegacyRef<HTMLLIElement> = useRef(null)
    useEffect(() => {

        return () => {
            liRef.current?.classList.add(style.item_animation_mount);
        }
    }, [])

    const handlerClick = () => {
        liRef.current?.classList.remove(style.item_animation_mount);
        liRef.current?.classList.add(style.item_animation_unmount);

        setTimeout(() => {
            removeTodo(id)
        }, 500)
    }
    return (
        <li className={`${style.lesson1__item}  `} ref={liRef} >
            <h2 className={style.lesson1__item_id}>
                <span>id:</span>{id}
            </h2>
            <h3 className={style.lesson1__item_title}>
                <span>текст:</span>{title}
            </h3>
            <p className={style.lesson1__item_checked}>
                <input onChange={() => toggleTodo(id)} type="checkbox" id={String(id)} checked={complete} />
                <label htmlFor={String(id)}>{!complete ? 'false' : 'true'}</label>
            </p>
            <button className={style.close_btn} onClick={handlerClick}>
                <img src={closeImg} />
            </button>
        </li>
    )
}

export default TodoItem