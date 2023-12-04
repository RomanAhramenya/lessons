import style from './visual-studio.module.css'
interface IGreenProps {
    text: string
}

const Green = (props: IGreenProps) => {
    const { text } = props

    return (
        <span className={style.green}>
            {text}
        </span>
    )
}

export default Green