import { ITodo } from "../../types/data"
import style from './lesson.module.css'
import closeImg from './../../assets/images/todo/close.png'
interface ITodoItemProps extends ITodo {

}

const TodoItem = (props: ITodoItemProps) => {
    const { id, title, complete } = props

    return (
        <li className={style.lesson1__item}>
            <h2 className={style.lesson1__item_id}><span>id:</span>{id}</h2>
            <h3 className={style.lesson1__item_title}><span>текст:</span>{title}</h3>
            <p className={style.lesson1__item_checked}><span>checked:</span>{!complete ? 'false' : 'true'}</p>
            <button className={style.close_btn}>
                <img src={closeImg} />
            </button>
        </li>
    )
}

export default TodoItem