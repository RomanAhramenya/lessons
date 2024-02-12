import { useEffect, useRef, useState } from 'react'
import Board from '../visual-studio/Board'
import './../../index.css'
import img_1 from './../../assets/images/hooks/Screenshot_use-effect_1.png'
import img_2 from './../../assets/images/hooks/Screenshot_use-effect_2.png'
interface ICounter {
    refP: React.RefObject<HTMLParagraphElement>
}
const Counter = ({ refP }: ICounter) => {
    const [count, setCount] = useState(0)



    if (refP.current) refP.current.innerHTML += `<div style="color: yellow">я  count: ${count}</div>`



    useEffect(() => {
        if (refP.current) {
            refP.current.innerHTML += `<div style="color: blue" >я отресовался count: ${count}</div>`
        }



        return () => {
            if (refP.current) {
                refP.current.innerHTML += `<div style="color: red">я удалися(обновился) count: ${count}</div>`
            }
        }
    }, [count])
    return (

        <div style={{ margin: '20px auto', fontSize: '30px', }} className='df'>
            <span>{count}</span>
            <button className='custom_btn' onClick={() => setCount(prev => prev + 1)}>
                +
            </button>
        </div>


    )
}

const UseEffectHook = () => {
    const [isShowCount, setIsShowCount] = useState(true)
    const refP: React.RefObject<HTMLParagraphElement> = useRef(null)
    const handleShow = () => {
        setIsShowCount(prev => !prev)
    }
    return (
        <ul className="guide__list">
            <li className="guide__item">
                useEffect нужен для синхронизации react состояния и какого-то внешнего состояния</li>
            <li className="guide__item">
                <div className="guide__img">
                    <img src={img_1} alt="" />
                </div>
            </li>
            <li>
                <p ref={refP}></p>
                {isShowCount && <Counter refP={refP} />}
                <button onClick={handleShow} className='custom_btn'>{isShowCount ? 'Скрыть Count' : 'Показать Count'}</button>
            </li>
            <li className="guide__item">
                <div>если передадим в массив зависимостей (обьект,массив,функцию) ссылочный тип данных  который создется в нутри рендера , то получим бесконечное обновление </div>
                <div className="guide__img">
                    <img src={img_2} alt="" />
                </div>
            </li>
        </ul>
    )
}

export default UseEffectHook


