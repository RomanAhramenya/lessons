import { useRef, useState } from 'react'
import style from './interviews.module.css'
import screen1 from './../../../assets/images/interviews/Screenshot_1.png'
const data = [
    {
        title: ' напиши функцию // sum(1,2) => 3 sum(1)(2) => 3',
        url: screen1
    },
    {
        title: ' напиши функцию // sum(1,2) => 3 sum(1)(2) => 3',
        url: screen1
    },
]
const InterviewsJs = () => {

    return (
        <section className='section'>

            <h2 className='section__title'>Подготовка к собеседованиям</h2>
            <ul className={style.interviews_js__list}>
                {data.map((item, index) => <ItemJs key={index} title={item.title} url={item.url} />
                )}
            </ul>

        </section>
    )
}

export default InterviewsJs

interface IItemJs {
    title: string
    url: string
}
const ItemJs = (props: IItemJs) => {
    const { title, url } = props
    const [isShow, setIsShow] = useState(false)
    const imgRef: React.LegacyRef<HTMLImageElement> = useRef(null)
    console.log(imgRef.current?.clientHeight)
    return (
        <li className={style.interviews_js__item}>
            <h5>{title} <button onClick={() => setIsShow(prev => !prev)}>показать решение</button></h5>
            <div style={{ height: isShow ? `${imgRef.current?.clientHeight}px` : '0' }}><img ref={imgRef} src={url} alt="" /></div>
        </li>
    )
}


