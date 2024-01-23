import { ReactNode, useRef } from 'react'
import style from './visual-studio.module.css'
interface IBoardProps {
    children: ReactNode
    placeholder?: string
}

const Board = (props: IBoardProps) => {
    const { children, placeholder } = props;



    const preRef: React.LegacyRef<HTMLElement> = useRef(null)
    const spanRef: React.LegacyRef<HTMLSpanElement> = useRef(null)


    const handlerClick = () => {
        const innerText = preRef.current?.innerText
        if (innerText) {
            navigator.clipboard.writeText(innerText)

            toggleClassCopy()
        }
    }

    const toggleClassCopy = () => {
        spanRef.current?.classList.add(style.board__copy_ok)
        setTimeout(() => {
            spanRef.current?.classList.remove(style.board__copy_ok);
        }, 2000);
    }
    return (
        <div className={style.container}  >
            <pre className={style.board}>
                <div className={style.board__placeholder}>{placeholder}</div>
                <code ref={preRef}>{children}</code>
                <button onClick={handlerClick} className={style.board__copyBtn}>
                    <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" >
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                    </svg>
                </button>
                <span className='dn' ref={spanRef}>ok</span>
            </pre>

        </div>
    )
}

export default Board