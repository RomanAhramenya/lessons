import Yellow from '../../../visual-studio/Yellow'
import style from './../styles-page.module.css'
import DysplayFlex from './ui/DysplayFlex'

const BasicConcepts = () => {


    return (
        <>
            <h3 className={style.title}>Основные понятия</h3>
            <ul className='guide__list'>
                <li className='guide__item'>
                    Стоит margin: 5px !! <Yellow>margin у флех-элементов не схлопывается , а суммируется...используем : gap | column-gap | row-gap</Yellow>
                </li>
                <li className='guide__item'>
                    <DysplayFlex />
                </li>
            </ul>
        </>
    )
}

export default BasicConcepts