import { Outlet } from 'react-router-dom'
import CustomLink from '../CustomLink'
import style from './../react-router-guide.module.css'
const ExamplePage = () => {


    return (
        <div>
            <header className={style.header}>
                <CustomLink parent="/router-dom/example/" to="">Home</CustomLink>
                <CustomLink parent="/router-dom/example/" to="blog">Blog</CustomLink>
                <CustomLink parent="/router-dom/example/" to="about">About</CustomLink>
            </header>
            <Outlet />
        </div>
    )
}

export default ExamplePage