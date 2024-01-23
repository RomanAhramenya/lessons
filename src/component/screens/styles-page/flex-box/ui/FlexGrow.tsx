import { useRef } from 'react'
import style from './../../styles-page.module.css'



const FlexGrow = () => {

    const refItem1: React.LegacyRef<HTMLDivElement> = useRef(null)
    const refItem2: React.LegacyRef<HTMLDivElement> = useRef(null)
    const refItem3: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handleClickGrow_1 = () => {
        if (refItem1.current) refItem1.current.style.flexGrow = '1';
    }
    const handleClickGrow_2 = () => {
        if (refItem2.current) refItem2.current.style.flexGrow = '2';
    }
    const handleClickGrow_3 = () => {
        if (refItem3.current) refItem3.current.style.flexGrow = '3';
    }
    const handleClickGrow_reset = () => {
        if (refItem1.current && refItem2.current && refItem3.current) {
            refItem1.current.style.flexGrow = '0';
            refItem2.current.style.flexGrow = '0';
            refItem3.current.style.flexGrow = '0';
        }
    }
    const styleDivGrow: React.CSSProperties = {
        display: 'flex',
        border: 'solid 1px gray',
        background: '#bdf800',
        textTransform: 'capitalize',
    }
    const styleLi: React.CSSProperties = {
        padding: '10px 0',
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
            <h3 className={style.title}>Flex-grow</h3>
            <p>CSS-свойство flex-grow задает коэффициент роста flex, который определяет, какая часть оставшегося пространства flex-контейнера должна быть назначена основному размеру flex-элемента.</p>
            <p>Если основной размер flex-контейнера больше, чем объединенные основные размеры flex-элементов, дополнительное пространство распределяется между flex-элементами, при этом каждый элемент роста является значением их коэффициента роста в пропорции к сумме коэффициентов роста flex-контейнеров всех элементов контейнера.</p>
            <ul style={{ fontSize: '16px' }}>
                <li style={styleLi}>Главная: <button onClick={handleClickGrow_1} style={styleBtn}>flex-grow:1;</button></li>
                <li style={styleLi}>О нас: <button onClick={handleClickGrow_2} style={styleBtn}>flex-grow:2;</button></li>
                <li style={styleLi}>Контакты: <button onClick={handleClickGrow_3} style={styleBtn}>flex-grow:3;</button></li>
                <li style={styleLi}> <button onClick={handleClickGrow_reset} style={styleBtn}>Сбросить</button></li>
            </ul>

            <div style={styleDivGrow}>
                <div ref={refItem1} style={{
                    background: "#008b48", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center'
                }} >главная</div>

                <div ref={refItem2} style={{
                    background: "#00438b", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center'
                }} >о нас</div>

                <div ref={refItem3} style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center'
                }} >контакты</div>
            </div>
        </section>
    )
}

export default FlexGrow