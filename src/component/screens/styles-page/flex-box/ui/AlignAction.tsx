import FlexGrow from "./FlexGrow"
import FlexWrap from "./FlexWrap"
import style from './../../styles-page.module.css'
import FlexShrink from "./FlexShrink"
import JustifyAndAlign from "./JustifyAndAlign"
import Order from "./Order"




const AlignAction = () => {


    console.log('render AlignAction')


    const styleUl: React.CSSProperties = {
        margin: '30px',
        fontSize: '16px'
    }
    const styleli: React.CSSProperties = {
        padding: '5px 0'
    }
    return (
        <>
            <FlexWrap />
            <section className={style.section}>
                <h3 className={style.title} >flex-flow</h3>
                <p >flex-flow - это обьедененый flex-direction и flex-wrap</p>
                <ul style={styleUl}>
                    <li style={styleli}>flex-flow: column wrap;</li>
                    <li style={styleli}>flex-flow: row nowrap;</li>
                    <li style={styleli}>flex-flow: column-reverse wrap-reverse;</li>
                    <li style={styleli}>и т.д</li>

                </ul>
            </section>
            <FlexGrow />
            <FlexShrink />
            <JustifyAndAlign />
            <section className={style.section}>
                <h3 className={style.title} >align-self</h3>
                <p >Все тоже что и align-items , только для item flex-контейнера</p>
                <ul style={styleUl}>
                    <li style={styleli}>align-self: stretch;</li>
                    <li style={styleli}>align-self: center;</li>
                    <li style={styleli}>align-self: start;</li>
                    <li style={styleli}>align-self: end;</li>

                </ul>
            </section>
            <section className={style.section}>
                <h3 className={style.title} >flex-basis</h3>
                <p >Задает размер item по оси flex-basis: 300px при flex-direction: row , даст width:300px , а при flex-direction: column , даст height:300px </p>
                <ul style={styleUl}>
                    <li style={styleli}>flex-basis: 10em;</li>
                    <li style={styleli}>flex-basis: 3px;</li>
                    <li style={styleli}>flex-basis: 50%;</li>
                    <li style={styleli}>flex-basis: auto;</li>

                </ul>

            </section>
            <Order />
            <section className={style.section}>
                <h3 className={style.title} >flex</h3>
                <p >комбинированное свойсвто flex: flex-grow flex-shrink flex-basis</p>
                <ul style={styleUl}>
                    <li style={styleli}>flex: 1 1 100px;</li>
                    <li style={styleli}>flex: 2;</li>
                    <li style={styleli}>flex: 1 30px;</li>
                </ul>

            </section>
        </>
    )
}

export default AlignAction