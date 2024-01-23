import { Outlet } from "react-router-dom"
import CustomLink from "../react-router-guide/CustomLink"
import imgHook from './../../assets/images/icons/react.png'
import './../../index.css'

const HooksPage = () => {


    return (
        <section className="section">
            <div className="section__title">hooks</div>
            <ul className="guide__list">
                <li className="tags__list">
                    <img src={imgHook} alt="" />
                </li>
            </ul>
            <div className='content'>
                <div className='content__main'>
                    <Outlet />
                </div>

                <ul className='navigate__list'>
                    <li className='navigate__item'>
                        <CustomLink parent="/hooks/" to="">useState()</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/hooks/" to="use-effect">useEffect()</CustomLink>
                    </li>

                </ul>


            </div>

        </section>
    )
}

export default HooksPage