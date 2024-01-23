
import { Outlet } from 'react-router-dom'
import CustomLink from '../../../react-router-guide/CustomLink'
import style from './../styles-page.module.css'

const FlexBoxPage = () => {


    return (
        <div className={style.container}>
            <ul className={style.nav__list}>
                <li className={style.nav__item}>
                    <CustomLink parent='styles/flex-box/' to=''>Основные понятия</CustomLink>
                </li >
                <li className={style.nav__item}>
                    <CustomLink parent='styles/flex-box/' to='direction'>Направление осей</CustomLink>
                </li>
                <li className={style.nav__item}>
                    <CustomLink parent='styles/flex-box/' to='align'>Выравнивание элементов</CustomLink>
                </li>
                <li className={style.nav__item}>
                    <CustomLink parent='styles/flex-box/' to='video'>Видео</CustomLink>
                </li>
            </ul>

            <Outlet />

        </div>

    )
}

export default FlexBoxPage