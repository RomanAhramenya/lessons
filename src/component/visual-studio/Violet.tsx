import style from './visual-studio.module.css'
interface IVioletProps {
    text: string
}

const Violet = (props: IVioletProps) => {
    const { text } = props

    return (
        <span className={style.violet}>
            {text}
        </span>
    )
}

export default Violet