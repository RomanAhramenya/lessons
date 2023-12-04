import style from "./visual-studio.module.css"
interface IRedProps {
    text: string
}

const Red = (props: IRedProps) => {
    const { text } = props

    return (
        <span className={style.red}>{text}</span>
    )
}

export default Red
