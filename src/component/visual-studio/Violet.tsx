import React from 'react'
import style from './visual-studio.module.css'
interface IVioletProps {
    children: React.ReactNode
}

const Violet = (props: IVioletProps) => {
    const { children } = props

    return (
        <span className={style.violet}>
            {children}
        </span>
    )
}

export default Violet