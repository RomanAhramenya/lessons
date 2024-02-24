import { useCallback, useEffect, useRef, useState } from 'react'
import style from './hooks-style.module.css'
import Yellow from '../visual-studio/Yellow'
import Red from '../visual-studio/Red'
import Blue from '../visual-studio/Blue'
import screen6 from './../../assets/images/hooks/Screenshot_6.png'
import screen7 from './../../assets/images/hooks/Screenshot_7.png'
import screen8 from './../../assets/images/hooks/Screenshot_8.png'
import { Link } from 'react-router-dom'
import Green from '../visual-studio/Green'

const UseRefHook = () => {


    return (
        <ul className="guide__list">
            <li className="guide__item">
                <div> Попытаемся  добавлять и  удалять <Yellow>addEventListener('scroll')</Yellow> на <Red>ul</Red> , так как let <Red>ulElem:any;</Red> при каждой перерисовке ровняется <span style={{ opacity: '0.5' }}>unfefined</span>,
                    мы будем иметь следующую проблему в <Blue>removeScroll()</Blue>: <Red>ulElem<span style={{ opacity: '0.5' }}>(unfefined)</span></Red><Yellow>.removeEventListener(...)</Yellow></div>
                <div className='guide_img'>
                    <img src={screen6} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <AddNumberBad />
            </li>
            <li className="guide__item">
                <div>
                    Теперь вместо document.querySelector вызываем хук <Blue>useRef()</Blue> который будет хранить в себе обект <Red>{"{current:ul}"}</Red> и который не будет пересоздовать каждый render. Очень важно,  функцию <Blue>scroll()</Blue>
                    , мы помещаем в хук <Blue><Link style={{ textDecoration: "underline" }} to='/hooks/use-callback'>useCallback()</Link></Blue>, по той причине что при каждой перерисовке ссылка на функцию <Blue>scroll()</Blue> пересоздается.. и мы не сможем
                    в <Yellow>refUl</Yellow>.<Red>current?</Red>.<Blue>removeEventListener</Blue>(<Green>'scroll'</Green>, <Red>scroll</Red>) ссылаться на <Red>scroll</Red> так как каждый раз эта фукция преоздается
                </div>
                <div className='guide_img'>
                    <img src={screen7} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <AddNumber />
            </li>
            <li className="guide__item">
                <div>так так же <Blue>useRef()</Blue> может использоваться ни только для хранения дом элементов</div>
                <div className='guide_img'>
                    <img src={screen8} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <AddNumberTimer />
            </li>
        </ul>
    )
}

export default UseRefHook


const AddNumberBad = () => {

    let ulElem: any;

    const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5])

    const refDiv: React.LegacyRef<HTMLDivElement> = useRef(null)

    const scroll = (position: number) => {
        if (refDiv.current) refDiv.current.textContent = `скролл отслеживается ${position}`
    }
    useEffect(() => {

        ulElem = document.querySelector('.ul')
        ulElem.addEventListener('scroll', (e: any) => {
            scroll(Math.floor(e.timeStamp))
        })

    }, [])

    const removeScroll = () => {
        try {
            ulElem.removeEventListener('scroll', scroll)

        } catch (error) {
            if (refDiv.current) refDiv.current.innerHTML = `<span style="color:red">Ошибка ${error}</span>`
        }

    }

    const addNumber = () => {
        setNumbers(numbers => [...numbers, numbers.length + 1])
    }
    return (

        <div className={style.addNumber}>
            <ul className='ul'>
                {numbers.map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
            <div ref={refDiv}>scroll не отслеживается</div>
            <div className={style.group_btn}>
                <button onClick={addNumber}>Добавить число</button>
                <button onClick={removeScroll}>Не следить за scroll</button>
            </div>

        </div>
    )
}

const AddNumber = () => {

    const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5])

    const refDiv: React.LegacyRef<HTMLDivElement> = useRef(null)
    const refUl: React.RefObject<HTMLUListElement> = useRef(null)

    const scroll = useCallback((e: any) => {
        if (refDiv.current) refDiv.current.textContent = `скролл отслеживается ${Number(Math.floor(e.timeStamp))}`
    }, [refUl])

    useEffect(() => {
        refUl.current?.addEventListener('scroll', scroll)
    }, [numbers])

    const removeScroll = () => {
        refUl.current?.removeEventListener('scroll', scroll)
        if (refDiv.current) refDiv.current.innerHTML = `<span style="color:green">Обработчик усешно удален</span>`
    }

    const addNumber = () => {
        setNumbers(numbers => [...numbers, numbers.length + 1])
    }

    return (
        <div className={style.addNumber}>
            <ul ref={refUl}>
                {numbers.map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
            <div ref={refDiv}>scroll не отслеживается</div>
            <div className={style.group_btn}>
                <button onClick={addNumber}>Добавить число</button>
                <button onClick={removeScroll}>Не следить за scroll</button>
            </div>
        </div>
    )
}

const AddNumberTimer = () => {
    let timer: any = useRef()
    const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5])

    const addNumber = () => {
        setNumbers(numbers => [...numbers, numbers.length + 1])
    }

    const handleStart = () => {
        timer.current = setInterval(() => {
            addNumber()
        }, 1000)
    }
    const handleStop = () => {
        clearInterval(timer.current)
    }
    return (
        <div className={style.addNumber}>
            <ul >
                {numbers.map(num => (
                    <li key={num}>{num}</li>
                ))}
            </ul>
            <div className={style.group_btn}>
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
            </div>
        </div>
    )
}