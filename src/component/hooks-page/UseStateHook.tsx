import { useState } from 'react'
import Board from '../visual-studio/Board'
import './../../index.css'
import screen1 from './../../assets/images/hooks/Screenshot_use-state1.png'
import screen2 from './../../assets/images/hooks/Screenshot_use-state2.png'
import Yellow from '../visual-studio/Yellow'

const UseStateHook = () => {

    function isRerender(num: number): number {
        console.log('я вызвалась')
        return 10 + num
    }

    const [value, setValue] = useState(() => isRerender(10))
    const plusPrev = () => {
        setValue((prev) => prev + 1)
    }
    const plus = () => {
        setValue(value + 1)
    }
    const minus = () => {
        setValue(value - 1)
    }

    const plus3 = () => {
        plus();
        plus();
        plus()
    }
    const plus3Prev = () => {
        plusPrev();
        plusPrev();
        plusPrev()
    }
    return (
        <ul className="guide__list">
            <li className="guide__item"><div>Хук useState() позволяет нам хранить состояние компонена и изменять его</div>
                <Board>
                    const [value,setValue] = useState(0)
                </Board>
            </li>
            <li className="guide__item">
                <div>в данном исполнени если мы прибовляем или убавляем по одному все работает хорошо но при поппытке добавить 3 возникнет странное поведение смотри ниже</div>
                <Board>
                    {`const plus = () =>   {setValue(value + 1)}`} <br /><br />
                    {"const minus = () => {setValue(value - 1)}"} <br /> <br />
                    {"const plus3 = () => {"} <br />
                    // каждый вызов функции plus() будет равен 0+1 <br />
                    // так как value замкнулось в функции plus < br />
                    {" plus();"} <br />
                    {" plus();"} <br />
                    {" plus();"} <br />
                    {"}"} <br /> <br />
                    return ( <br /> <br />
                    {"<div className='text_center'>{value}</div>"} <br />
                    {"<div className='df'>"} <br />
                    {" <button onClick={plus} className='custom_btn'> + </button>"} <br />
                    {" <button onClick={minus} className='custom_btn'> - </button>"} <br />
                    {" <button onClick={plus3} className='custom_btn'> +3 </button>"} <br />
                    {"</div>"}  <br /> )

                </Board>
            </li>
            <li className="guide__item">
                <div className='text_center'>{value}</div>
                <div className='df'>
                    <button onClick={plus} className='custom_btn'>+</button>
                    <button onClick={minus} className='custom_btn'>-</button>
                    <button onClick={plus3} className='custom_btn'>+3</button>
                </div>
            </li>
            <li className="guide__item">
                <div>в setValue можно передать функцию которая будет принимать prev предыдущее состояние и тогда все будет хорошо работать
                    <Yellow> Одно из главных правил, если в каком то обновлении состояния , ты делаешь обновление на основании предыдущего состояния, то используй этот подход </Yellow>
                </div>
                <Board>
                    {"const plusPrev = () => {"} <br />
                    {"setValue((prev) => prev + 1)"} <br />
                    {"  }"} <br /> <br />
                    {"  const plus3Prev = () => {"} <br />
                    {"plusPrev();"} <br />
                    {"plusPrev();"} <br />
                    {"plusPrev();"} <br />
                    {" }"} <br />
                </Board>
            </li>
            <li className="guide__item">
                <div className='text_center'>{value}</div>
                <div className='df'>
                    <button onClick={plusPrev} className='custom_btn'>+</button>
                    <button onClick={minus} className='custom_btn'>-</button>
                    <button onClick={plus3Prev} className='custom_btn'>+3</button>
                </div>
            </li>
            <li className="guide__item">
                <div>вариант когда первоначальное значение state расчитывается какой-то функцией</div>
                <Board>

                    {"function isRerender(num: number): number {"} <br />
                    {"console.log('я вызвалась')"} <br />
                    {" return 10 + num"} <br />
                    {"}"} <br /> <br />
                    {"const [value, setValue] = useState(isRerender(10))"} <br />

                </Board>
            </li>
            <li className="guide__item">
                <div>В этом случае сложная функция будет вызываться каждый раз при перерисовке компонента</div>
                <div className="guide__img">
                    <img src={screen1} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <div>Что бы этого не происходило, вызываем анонимную функци и передаем ей нашу функцию</div>
                <Board>{" const [value, setValue] = useState(() => isRerender(10))"}</Board>
                <div className="guide__img">
                    <img src={screen2} alt="" />
                </div>
            </li>
        </ul>
    )
}

export default UseStateHook