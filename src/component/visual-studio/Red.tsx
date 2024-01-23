import style from "./visual-studio.module.css"
interface IRedProps {
    children: React.ReactNode
}

const Red = (props: IRedProps) => {
    const { children } = props

    return (
        <span className={style.red}>{children}</span>
    )
}

export default Red
