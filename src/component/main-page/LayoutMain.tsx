import style from './layout.module.css'

import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from './../../assets/images/header-logo.png'
import BurgerMenu from './BurgerMenu'

const LayoutMain = () => {
    const navigate = useNavigate();

    // const goBack = () => navigate('/posts')
    const goBack = () => {

        navigate(-1)
    }
    const goForward = () => {

        navigate(1)
    }
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
            <div className={style.navigate_btns}>
                <button onClick={goBack}>&lArr; назад</button>
                <button onClick={goForward}> вперед &rArr;</button>
            </div>
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