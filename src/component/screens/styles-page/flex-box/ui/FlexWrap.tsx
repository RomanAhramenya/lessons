import { useRef, useState } from "react"
import style from './../../styles-page.module.css'
import Board from "../../../../visual-studio/Board"

type IFlexWrap = 'flex-wrap: wrap;' | 'flex-wrap: nowrap;' | 'flex-wrap: wrap-reverse;'
const IFlexWrapItem = ['главная', 'о нас', 'контакты']

const FlexWrap = () => {

    const [titleFlexWrap, setTitleFlexWrap] = useState<IFlexWrap>('flex-wrap: nowrap;')
    const [widthFlexWrapItem, setWidthFlexWrapItem] = useState(30)
    const refFlexWrapContainer: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handlerWrap = () => {
        setTitleFlexWrap('flex-wrap: wrap;')
        if (refFlexWrapContainer.current) refFlexWrapContainer.current.style.flexWrap = 'wrap';
    }

    const handlerNoWrap = () => {
        setTitleFlexWrap('flex-wrap: nowrap;')
        if (refFlexWrapContainer.current) refFlexWrapContainer.current.style.flexWrap = 'nowrap';
    }

    const handlerWrapReverse = () => {
        setTitleFlexWrap('flex-wrap: wrap-reverse;')
        if (refFlexWrapContainer.current) refFlexWrapContainer.current.style.flexWrap = 'wrap-reverse';
    }

    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setWidthFlexWrapItem(Number(e.target.value))
    }

    const styleDivFlexWrapContainer: React.CSSProperties = {
        display: 'flex',
        border: 'solid 1px gray',
        background: 'purple',
        textTransform: 'capitalize',
    }
    const styleDivFlexWrapItem: React.CSSProperties = {
        background: `#00c500`,
        margin: '0',
        padding: '10px 20px',
        border: 'solid 1px black',
        width: widthFlexWrapItem + '%',
        textAlign: 'center'
    }
    return (
        <section className={style.section}>
            <h3 className={style.title}>Flex-wrap</h3>
            <div style={{ margin: '30px 0' }} className={style.dysplay_flex_btn_group}>
                <div>
                    <button onClick={handlerNoWrap}>{"flex-wrap: no-wrap;"}</button>
                    <button onClick={handlerWrap}>{"flex-wrap: wrap;"}</button>
                    <button onClick={handlerWrapReverse}>{"flex-wrap: wrap-reverse;"}</button>
                </div>
                <label>размер item <input onChange={handlerChange} type="range" value={widthFlexWrapItem} min={30} max={100} /> {widthFlexWrapItem} %</label>
            </div>



            <div ref={refFlexWrapContainer} style={styleDivFlexWrapContainer} >
                {IFlexWrapItem.map((item, index) => {
                    return <div key={index} style={styleDivFlexWrapItem}>{item}</div>
                })}
            </div>
        </section>
    )
}

export default FlexWrap