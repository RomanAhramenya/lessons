import { memo, useEffect, useState } from "react"
import Blue from "../visual-studio/Blue"
import style from './hooks-style.module.css'
import screen1 from './../../assets/images/hooks/Screenshot_3.png'
import screen2 from './../../assets/images/hooks/Screenshot_1.png'
import screen3 from './../../assets/images/hooks/Screenshot_2.png'
import screen4 from './../../assets/images/hooks/Screenshot_4.png'
import screen5 from './../../assets/images/hooks/Screenshot_5.png'
import Violet from "../visual-studio/Violet"
import Yellow from "../visual-studio/Yellow"
import Video from "../ui/Video"
import Loader from "../ui/Loader"
interface Count {
   value: number
}
interface Example {
   status: 'bad' | 'good'
}

interface IsFive extends Example {
   value: number
}
const UseMemoHook = () => {


   return (
      <ul className="guide__list">
         <li className="guide__item">
            <Video url="bm7wyCDJ7H8" />
         </li>
         <li className="guide__item">
            <div><Blue>useMemo()</Blue> - Это хук. С помощью данного хука можно указать какую функцию мемоизировать и при каком условии</div>

         </li>
         <li className="guide__item">
            <div><Blue>Мемоизация</Blue>   - она сохроняет результат выполнения функции , что бы в будущем не выполнять ее на каждый перерендер, а только тогда когда это реально необходимо </div>

         </li>
         <li className="guide__item">
            <div className="guide_img">
               <img src={screen1} alt="" />
            </div>
         </li>
         <li className="guide__item">
            <ExamplePractic status="bad" />
         </li>

         <li className="guide__item">
            <div>Решается спомощью мемоизации</div>
            <div className="guide_img">
               <img src={screen2} alt="" />
            </div>
         </li>
         <li className="guide__item">
            <ExamplePractic status="good" />
         </li>

         <li className="guide__item">
            <div>Но осталась еще одна проблема , при любом действии все три компонента перерисовываются</div>
            <div className="guide_img">
               <img src={screen3} alt="" />
            </div>
         </li>
         <li className="guide__item">
            <div>
               решается с помощью <Blue>React.memo()</Blue> HOC
            </div>
            <div className="guide_img">
               <img src={screen4} alt="" />
            </div>
         </li>
         <li className="guide__item">
            <div>
               на скрине выше <Yellow>isFive</Yellow>  все равно будет каждый раз прерисовываться так как идет поверхностное сравнение пропсов, нужно настраивать в ручную через функции с параматрами <Yellow>prevProps & nextProps</Yellow>
               <Violet> , return false</Violet>  перерисует компонент
            </div>
            <div className="guide_img">
               <img src={screen5} alt="" />
            </div>
         </li>

      </ul>
   )
}

export default UseMemoHook



const ExamplePractic = (props: Example) => {
   const { status } = props

   const [count, setCount] = useState(0)
   const [count2, setCount2] = useState(0)

   return (
      <div className={style.container}>
         <h5>Счетчик 1:</h5>
         <div className={style.count}> <button className="custom_btn" onClick={() => setCount(count => count + 1)}>+</button> <Count value={count} /> </div>
         <h5>Счетчик 2:</h5>
         <div className={style.count}> <button className="custom_btn" onClick={() => setCount2(count => count + 1)}>+</button> <Count value={count2} /> <IsFive status={status} value={count2} /></div>
      </div>
   )
}



const Count = memo((props: Count) => {
   console.log('render Count')
   return <div>{props.value}</div>
})


const IsFive = memo((props: IsFive) => {
   console.log('render five')
   const { value, status } = props

   const [render, setRender] = useState(false)

   useEffect(() => {

      setRender(true)

   }, [])
   const getResultMemo = () => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? <div style={{ color: 'green' }}>Это 5</div> : <div style={{ color: 'red' }}>Это не 5</div>
   }


   const getResult = () => {
      let i = 0;
      while (i < 600000000) i++;
      return value === 5 ? <div style={{ color: 'green' }}>Это 5</div> : <div style={{ color: 'red' }}>Это не 5</div>
   }

   return (
      <>
         {render ? status === 'bad' ? getResult() : getResultMemo() : ''}

      </>
   )

},
   (prevProps, newProps) => {
      if (newProps.value === 5 || prevProps.value === 5) {
         return false
      }
      else {
         return true
      }
   }) 