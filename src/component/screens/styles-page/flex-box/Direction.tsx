
import style from './../styles-page.module.css'
import DirectionAction from './ui/DirectionAction'
const Direction = () => {

    return (
        <>
            <h3 className={style.title}>Направление осей</h3>
            <ul className='guide__list'>
                <li className='guide__item'>
                    <DirectionAction />
                </li>
            </ul>
        </>
    )
}

export default Direction