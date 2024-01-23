import { Outlet } from "react-router-dom"
import CustomLink from "./CustomLink"
import reactDomIcon from './../../assets/images/guides-react-router-dom/tags-icon.png'

const GuideReactRouter = () => {


    return (
        <section className="section">
            <ul className="guide__list">
                <li className="tags__list">
                    <img src={reactDomIcon} alt="" />
                </li>
            </ul>
            <div className='content'>
                <div className='content__main'>
                    <Outlet />
                </div>

                <ul className='navigate__list'>
                    <li className='navigate__item'>
                        <CustomLink parent="/router-dom/" to="">Базовый роутинг</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/router-dom/" to="custom-link">CustomLink</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/router-dom/" to="params">Параметры в ссылках</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/router-dom/" to="use-navigate">История,локация, приватные роуты</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/router-dom/" to="example">Пример</CustomLink>
                    </li>
                </ul>


            </div>

        </section>
    )
}

export default GuideReactRouter