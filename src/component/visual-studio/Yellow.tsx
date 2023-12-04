import style from './visual-studio.module.css'
interface IYellowProps {
    text: string
}

const Yellow = (props: IYellowProps) => {
    const { text } = props

    return (
        <span className={style.yellow}>
            {text}
        </span>
    )
}

export default Yellow