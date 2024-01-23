import { useAuth } from "../../hoc/useAuth"
import { useLocation, useNavigate } from "react-router-dom"
import style from '../react-router-guide.module.css'
const LoginPage = () => {
    const context = useAuth()
    const location = useLocation()
    const navigate = useNavigate()
    const fromPage = location.state?.from?.pathname || '/'
    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement
        const user = form.username.value
        context?.signIn(user, () => {
            navigate(fromPage, { replace: true })
        })
    }
    return (
        <div className={style.login}>
            <h1 className={style.login__title}>login</h1>
            <form onSubmit={handleSubmit} className={style.login__form}>
                <label>
                    Name: <input name="username" />
                </label>
                <button type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginPage