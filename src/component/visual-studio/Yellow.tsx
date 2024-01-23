import style from './visual-studio.module.css'
interface IYellowProps {
    children: React.ReactNode
}

const Yellow = (props: IYellowProps) => {
    const { children } = props

    return (
        <span className={style.yellow}>
            {children}
        </span>
    )
}

export default Yellow