interface INotFoundPageProps {

}
import style from './../react-router-guide.module.css'
const NotFoundPage = (props: INotFoundPageProps) => {
    const { } = props

    return (
        <div className={style.page}>
            NOT FOUND
        </div>
    )
}

export default NotFoundPage