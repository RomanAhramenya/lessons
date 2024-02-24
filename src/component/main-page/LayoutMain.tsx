import style from './layout.module.css'

import { NavLink, Outlet } from 'react-router-dom'
import logo from './../../assets/images/header-logo.png'
import BurgerMenu from './BurgerMenu'

const LayoutMain = () => {

    return (
        <>
            <header className='container'>
                <div className={`${style.header} section`}>
                    <h2 className={style.text}>Roman</h2>
                    <NavLink to='/' className={style.image}>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <h2 className={style.text}>Ahramenya</h2>
                </div>

            </header>

            <BurgerMenu />
            <main className={`${style.main} container`}>

                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}

export default LayoutMain