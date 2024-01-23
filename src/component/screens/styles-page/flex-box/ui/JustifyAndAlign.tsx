import { useRef, useState } from 'react'
import style from './../../styles-page.module.css'



const JustifyAndAlign = () => {


    const [title_justify, setTitle_justify] = useState('justify-content: start;')
    const [title_align, setTitle_align] = useState('align-items: start;')
    const [title_direction, setTitle_direction] = useState('flex-direction: row;')

    const refContainer: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handleClick_justify = (value: string) => {
        if (refContainer.current) {
            refContainer.current.style.justifyContent = value
            setTitle_justify(`justify-content: ${value};`)
        }
    }

    const handleClick_align = (value: string) => {
        if (refContainer.current) {
            refContainer.current.style.alignItems = value
            setTitle_align(`align-items: ${value};`)
        }
    }

    const handleClick_direction = (value: string) => {
        if (refContainer.current) {
            refContainer.current.style.flexDirection = value
            setTitle_direction(`flex-direction: ${value};`)
        }
    }
    const handleClickShrink_reset = () => {
        if (refContainer.current) {
            refContainer.current.style.flexDirection = 'row'
            refContainer.current.style.alignItems = 'start'
            refContainer.current.style.justifyContent = 'start'
            setTitle_direction('flex-direction: row;')
            setTitle_align('align-items: start;')
            setTitle_justify('justify-content: start;')
        }
    }
    const styleLi: React.CSSProperties = {
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',

    }
    const styleBtn: React.CSSProperties = {
        padding: '5px',
        background: 'white',
        color: 'black',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    return (
        <section className={style.section}>
            <h3 className={style.title}>justify-content и align-items</h3>
            <p>justify-content - выравнивание по оси X </p>
            <p>align-items - выравнивание по оси Y </p>
            <ul style={{ fontSize: '16px', display: 'flex', gap: '5px' }}>
                <li style={styleLi}>justify-content
                    <button onClick={() => handleClick_justify('start')} style={styleBtn}>justify-content: start;</button>
                    <button onClick={() => handleClick_justify('center')} style={styleBtn}>justify-content: center;</button>
                    <button onClick={() => handleClick_justify('end')} style={styleBtn}>justify-content: end;</button>
                    <button onClick={() => handleClick_justify('space-between')} style={styleBtn}>justify-content: space-between;</button>
                    <button onClick={() => handleClick_justify('space-around')} style={styleBtn}>justify-content: space-around;</button>
                    <button onClick={() => handleClick_justify('space-evenly')} style={styleBtn}>justify-content: space-evenly;</button>
                </li>
                <li style={styleLi}>align-items
                    <button onClick={() => handleClick_align('stretch')} style={styleBtn}>align-items: stretch;</button>
                    <button onClick={() => handleClick_align('center')} style={styleBtn}>align-items: center;</button>
                    <button onClick={() => handleClick_align('start')} style={styleBtn}>align-items: start;</button>
                    <button onClick={() => handleClick_align('end')} style={styleBtn}>align-items: end;</button>
                    <button onClick={() => handleClick_align('baseline')} style={styleBtn}>align-items: baseline;</button>
                </li>
                <li style={styleLi}>flex-direction
                    <button onClick={() => handleClick_direction('row')} style={styleBtn}>flex-direction: row;</button>
                    <button onClick={() => handleClick_direction('column')} style={styleBtn}>flex-direction: column;</button>
                </li>
                <li style={{ alignSelf: 'flex-end', ...styleLi }}> <button onClick={handleClickShrink_reset} style={styleBtn}>Сбросить</button></li>
            </ul>
            <p>
                {title_justify}
            </p>
            <p>{title_align}</p>
            <p>{title_direction}</p>
            <div ref={refContainer} style={{
                display: 'flex',
                border: 'solid 1px gray',
                background: '#bdf800',
                textTransform: 'capitalize',

                height: '300px'
            }}>

                <div style={{
                    background: "#008b48", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >главная </div>

                <div style={{
                    background: "#00438b", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >о нас </div>

                <div style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >контакты</div>
            </div>
        </section>
    )
}

export default JustifyAndAlign