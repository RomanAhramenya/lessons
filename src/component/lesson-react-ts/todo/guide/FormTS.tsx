import screen1Img from './../../../../assets/images/guideTs/Screenshot_form-1.png'
interface IFormTSProps {

}

const FormTS = (props: IFormTSProps) => {
    const { } = props

    return (
        <div>
            <h3>Типизация неуправляемой формы</h3>
            <ul className="guide__list">
                <li className="guide__item">
                    <div className="guide__img">
                        <img src={screen1Img} alt="" />
                    </div>
                </li>
            </ul>

        </div>
    )
}

export default FormTS

// type LoginFormFields = {
//     email: string;
//     password: string;
//     remember: boolean
// }
// type FormFields = {
//     email: HTMLInputElement
//     password: HTMLInputElement
//     remember: HTMLInputElement
// }
// function Forma() {

//     const onSubmit = (formFields: LoginFormFields) => {
//         console.log(formFields)
//     }
//     const handlerSubmit: React.FormEventHandler<HTMLFormElement & FormFields> = (e) => {
//         e.preventDefault()
//         const form = e.currentTarget
//         const { email, password, remember } = form
//         onSubmit({
//             email: email.value,
//             password: password.value,
//             remember: remember.checked
//         })
//     }
//     return (
//         <form onSubmit={handlerSubmit}>
//             <label htmlFor="">
//                 <span>Email</span>
//                 <input type="email" name="email" required />
//             </label>
//             <label htmlFor="">
//                 <span>Password</span>
//                 <input type="password" name="password" required />
//             </label>
//             <label htmlFor="">
//                 <span>Remember me</span>
//                 <input type="checkbox" name="remember" required />
//             </label>
//             <button type="submit">Logn</button>
//         </form>
//     )
// }
