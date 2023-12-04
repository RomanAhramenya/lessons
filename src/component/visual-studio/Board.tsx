import { ReactNode, useRef, useEffect } from 'react'
import style from './visual-studio.module.css'
import copyImg from './../../assets/images/visual-studio/copy.png'
interface IBoardProps {
    children: ReactNode
}

const Board = (props: IBoardProps) => {
    const { children } = props
    const preRef: React.LegacyRef<HTMLPreElement> = useRef(null)
    const spanRef: React.LegacyRef<HTMLSpanElement> = useRef(null)
    const handlerClick = () => {
        const innerText = preRef.current?.innerText
        if (innerText) {
            navigator.clipboard.writeText(innerText)

        }

    }
    const toggleClassCopy = () => {

    }
    return (
        <section className='section'  >
            <pre className={style.board} ref={preRef}>
                {children}
                <button onClick={handlerClick} className={style.board__copyBtn}><img src={copyImg} alt="" /></button>

            </pre>
            <span className={style.board__copy_ok}>ok</span>
        </section>
    )
}

export default Board