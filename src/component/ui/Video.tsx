
import style from './video.module.css'
interface IVideoProps {
    url: string
}

const Video = (props: IVideoProps) => {
    const { url } = props

    return (
        <div className={style.video}>
            <iframe width="560"
                height="315"
                src={`https://youtube.com/embed/${url}?autoplay=0`}
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            >
            </iframe>
        </div>
    )
}

export default Video