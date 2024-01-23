import { useState } from 'react'
import style from './../styles-page.module.css'

const Video = () => {
    const [id] = useState('XXlw7TUxRVY')

    return (
        <div className={style.video}>
            <iframe width="560"
                height="315"
                src={`https://youtube.com/embed/${id}?autoplay=0`}
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            >
            </iframe>
        </div>
    )
}

export default Video