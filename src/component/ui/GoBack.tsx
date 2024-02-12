import { useNavigate } from "react-router-dom"
import style from './goback.module.css'
import img from './../../assets/images/goback.png'
const GoBack = () => {
    const navigate = useNavigate()
    return (
        <div className={style.goBack}>
            <button onClick={() => navigate(-1)}> <img src={img} alt="" /> </button>
        </div>
    )
}

export default GoBack