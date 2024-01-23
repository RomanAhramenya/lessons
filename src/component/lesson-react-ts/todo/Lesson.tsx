
import style from './lesson.module.css'
import Board from "../../visual-studio/Board"
import Todo from './Todo'
import reactImg from './../../../assets/images/icons/react.png'
import tsImg from './../../../assets/images/icons/ts.png'
import jsImg from './../../../assets/images/icons/js.png'
import screenVite1 from './../../../assets/images/todo/Screenshot_vite-1.png'
import screenVite2 from './../../../assets/images/todo/Screenshot_vite-2.png'
import screenVite3 from './../../../assets/images/todo/Screenshot_vite-3.png'

const Lesson1 = () => {

   return (

      <section className={`${style.lesson1} section`}>
         <div>
            <div className={style.lesson1__inner}>
               <h2 className='section__title'>"Список дел"</h2>
               <ul className="tags__list">
                  <li className="tags__items"><a href="#"><img src={reactImg} alt="" /></a></li>
                  <li className="tags__items"><a href="#"><img src={tsImg} alt="" /></a></li>
                  <li className="tags__items"><a href="#"><img src={jsImg} alt="" /></a></li>
               </ul>
               <ul className="guide__list">
                  <li className="guide__item">
                     <div>разворачиваем проект на vite</div>
                     <Board>
                        npm create vite@latest
                     </Board>
                  </li>
                  <li className="guide__item">
                     <div>
                        Выбираем React
                     </div>
                     <div>
                        <img src={screenVite1} alt="vite" />
                     </div>
                  </li>
                  <li className="guide__item">
                     <div>
                        Выбираем TypeScript
                     </div>
                     <div>
                        <img src={screenVite2} alt="vite" />
                     </div>
                  </li>
                  <li className="guide__item">
                     <div>Разворачиваем проект командой:</div>
                     <Board>
                        npm install
                     </Board>
                  </li>
                  <li className="guide__item">
                     <div>
                        Удаляем все лишние и создаем : компоненты (TodoForm,TodoList) , и файл для наших типов types/data.ts
                     </div>
                     <div><img src={screenVite3} alt="vite" /></div>
                  </li>
                  <li className="guide__item">
                     <div>Cоздаем interface для наших todo</div>
                     <Board>

                        export interface ITodo &#123; <br />
                        id: number; <br />
                        title: string; <br />
                        complete: boolean; <br />
                        &#125;


                     </Board>
                  </li>
                  <li className="guide__item">
                     <div> В App.tsx jsx разметку для нашего приложения</div>
                     <Board>
                        &lt;section className='section'&gt; <br />
                        &lt;div className="conteiner"&gt;<br />
                        &lt;div className="todo"&gt;<br />
                        &lt;form onSubmit=&#123;e =&gt; addTodo(e)&#125; className='todo'&gt;<br />
                        &lt;input type="text" value=&#123;value&#125; onChange=&#123;e =&gt; setValue(e.target.value)&#125; /&gt;<br />
                        &lt;input type='submit' value='добавить' /&gt;<br />
                        &lt;/form&gt;<br />
                        &lt;ul className="todo__list"&gt;<br />

                        &lt;/ul&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/div&gt;<br />
                        &lt;/section&gt;
                     </Board>
                  </li>
                  <li className="guide__item">
                     <div>Создаем state для input и todos</div>
                     <Board>
                        const &#91;value,setValue&#93; = useState('') <br />
                        const &#91;todos,setTodos&#93; = useState&lt;TodoI&#91;&#93;&gt;(&#91;&#93;)
                     </Board>
                  </li>
                  <li className="guide__item">
                     <div>Создаем функцию addTodo | типизируем ее React.FormEventHandler&lt;HTMLFormElement&gt; | отменяем стандартное поведение формы | при условии , что поле ввода не пустое вызываем setTodos() |
                        делаем деструктуризацию массива и добовляем новый элемент
                     </div>
                     <Board>
                        const addTodo: React.FormEventHandler&lt;HTMLFormElement&gt; = (e) =&gt; &#123; <br />
                        e.preventDefault()<br />
                        if (value) &#123;<br />
                        setTodos([...todos, &#123;<br />
                        id: Date.now(),<br />
                        title: value,<br />
                        complete: false,<br />
                        &#125;])<br />
                        &#125;<br />

                        &#125;
                     </Board>
                  </li>
                  <li className="guide__item"></li>
                  <li className="guide__item"></li>
                  <li className="guide__item"></li>
                  <li className="guide__item"></li>
               </ul>
               <Todo />
            </div>
         </div>
      </section>

   )
}

export default Lesson1