import { useRef, useState } from 'react'
import style from './../../styles-page.module.css'



const FlexShrink = () => {

    const [widthContainer, setWidthContainer] = useState(100)

    const [title_1, setTitle_1] = useState('flex-shrink: 1;')
    const [title_2, setTitle_2] = useState('flex-shrink: 1;')
    const [title_3, setTitle_3] = useState('flex-shrink: 1;')

    const refItem1: React.LegacyRef<HTMLDivElement> = useRef(null)
    const refItem2: React.LegacyRef<HTMLDivElement> = useRef(null)
    const refItem3: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value
        setWidthContainer(Number(value))
    }

    const handleClickShrink_1 = (num: string) => {
        if (refItem1.current) {
            setTitle_1(`flex-shrink: ${num};`)
            refItem1.current.style.flexShrink = num;
        }
    }
    const handleClickShrink_2 = (num: string) => {
        if (refItem2.current) {
            setTitle_2(`flex-shrink: ${num};`)
            refItem2.current.style.flexShrink = num;
        }
    }
    const handleClickShrink_3 = (num: string) => {
        if (refItem3.current) {
            setTitle_3(`flex-shrink: ${num};`)
            refItem3.current.style.flexShrink = num;
        }
    }

    const handleClickShrink_reset = () => {
        if (refItem1.current && refItem2.current && refItem3.current) {
            refItem1.current.style.flexShrink = '1';
            refItem2.current.style.flexShrink = '1';
            refItem3.current.style.flexShrink = '1';
            setTitle_1('flex-shrink: 1;')
            setTitle_2('flex-shrink: 1;')
            setTitle_3('flex-shrink: 1;')

        }
    }

    const styleLi: React.CSSProperties = {
        padding: '10px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '5px',
        flex: '1 1 300px'
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
            <h3 className={style.title}>Flex-shrink</h3>
            <p>CSS-свойство flex-shrink задает коэффициент сжатия flex элемента flex. Если размер всех flex-элементов больше, чем размер flex-контейнера, элементы сжимаются в соответствии с .flex-shrink</p>
            <p>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>размер контейнера</span>
                    <input onChange={handlerChange} style={{ accentColor: 'yellow' }} type='range' value={widthContainer} min={30} max={100} />
                    <span>{widthContainer} %</span>
                </label>
            </p>
            <p>item - flex: '1 1 300px'</p>
            <ul style={{ fontSize: '16px', display: 'flex', gap: '5px' }}>
                <li style={styleLi}>Главная:
                    <button onClick={() => handleClickShrink_1('0')} style={styleBtn}>flex-shrink:0;</button>
                    <button onClick={() => handleClickShrink_1('1')} style={styleBtn}>flex-shrink:1;</button>
                    <button onClick={() => handleClickShrink_1('2')} style={styleBtn}>flex-shrink:2;</button>
                    <button onClick={() => handleClickShrink_1('3')} style={styleBtn}>flex-shrink:3;</button>
                </li>
                <li style={styleLi}>О нас:
                    <button onClick={() => handleClickShrink_2('0')} style={styleBtn}>flex-shrink:0;</button>
                    <button onClick={() => handleClickShrink_2('1')} style={styleBtn}>flex-shrink:1;</button>
                    <button onClick={() => handleClickShrink_2('2')} style={styleBtn}>flex-shrink:2;</button>
                    <button onClick={() => handleClickShrink_2('3')} style={styleBtn}>flex-shrink:3;</button>
                </li>
                <li style={styleLi}>Контакты:
                    <button onClick={() => handleClickShrink_3('0')} style={styleBtn}>flex-shrink:0;</button>
                    <button onClick={() => handleClickShrink_3('1')} style={styleBtn}>flex-shrink:1;</button>
                    <button onClick={() => handleClickShrink_3('2')} style={styleBtn}>flex-shrink:2;</button>
                    <button onClick={() => handleClickShrink_3('3')} style={styleBtn}>flex-shrink:3;</button>
                </li>
                <li style={{ alignSelf: 'flex-end', ...styleLi }}> <button onClick={handleClickShrink_reset} style={styleBtn}>Сбросить</button></li>
            </ul>

            <div style={{
                display: 'flex',
                border: 'solid 1px gray',
                background: '#bdf800',
                textTransform: 'capitalize',
                width: widthContainer + '%'
            }}>

                <div ref={refItem1} style={{
                    background: "#008b48", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',
                    flexBasis: '300px',

                }} >главная <br />{title_1}</div>

                <div ref={refItem2} style={{
                    background: "#00438b", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',
                    flexBasis: '300px',

                }} >о нас <br />{title_2}</div>

                <div ref={refItem3} style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',
                    flexBasis: '300px',

                }} >контакты <br />{title_3}</div>
            </div>
        </section>
    )
}

export default FlexShrink