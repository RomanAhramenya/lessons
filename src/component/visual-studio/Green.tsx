import style from './visual-studio.module.css'
interface IGreenProps {
    children: React.ReactNode
}

const Green = (props: IGreenProps) => {
    const { children } = props

    return (
        <span className={style.green}>
            {children}
        </span>
    )
}

export default Green