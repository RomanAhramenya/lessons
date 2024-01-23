import style from './visual-studio.module.css'
interface IBlueProps {
    children: React.ReactNode
}

const Blue = (props: IBlueProps) => {
    const { children } = props

    return (
        <span className={style.blue}>
            {children}
        </span>
    )
}

export default Blue