import { useState, useRef, useEffect } from "react"
import { ITodo } from "../../types/data"
import TodoList from "./TodoList"
import style from './lesson.module.css'
import Board from "../visual-studio/Board"
import Red from "../visual-studio/Red"
interface Lesson_1Props {

}

const Lesson1 = (props: Lesson_1Props) => {
   const { } = props
   const [value, setValue] = useState('')
   const [todos, setTodos] = useState<ITodo[]>([])
   const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null)
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
   const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value)
   }
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
   useEffect(() => {
      if (inputRef.current) inputRef.current.focus()
   }, [])
   return (
      <div>
         <section className={`${style.lesson1} section`}>
            <div className="container">
               <div className={style.lesson1__inner}>
                  <Board>
                     &#60;<Red text='h2' />
                  </Board>
                  <Board>
                     &#60;<Red text='h2' /> sdsdsd
                  </Board>
                  <h2 className='section__title'>первый урок todo list</h2>
                  <div className={style.lesson1__todo}>
                     <form onSubmit={e => addTodo(e)} className={style.lesson1__form}>
                        <input ref={inputRef} className={style.lesson1__input} type="text" value={value} onChange={e => handlerChange(e)} placeholder="value" />
                        <input type="submit" className={style.lesson1__btn} value='Добавить' />
                     </form>


                     <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
                  </div>
               </div>
            </div>
         </section>

      </div>
   )
}

export default Lesson1