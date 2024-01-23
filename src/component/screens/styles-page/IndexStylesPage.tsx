import { Outlet } from "react-router-dom"
import CustomLink from "../../react-router-guide/CustomLink"
import imgIcon from './../../../assets/images/icons/css-icon.png'

const IndexStylesPage = () => {


    return (
        <section className="section">
            <ul className="guide__list">
                <li className="section__title">Styles</li>
                <li className="tags__list">
                    <img src={imgIcon} alt="" />
                </li>
            </ul>
            <div className='content'>
                <div className='content__main'>
                    <Outlet />
                </div>

                <ul className='navigate__list'>
                    <li className='navigate__item'>
                        <CustomLink parent="/styles/" to="flex-box">Flex-box</CustomLink>
                    </li>
                    <li className='navigate__item'>
                        <CustomLink parent="/styles/" to="grid">Grid</CustomLink>
                    </li>

                </ul>


            </div>

        </section>
    )
}

export default IndexStylesPage