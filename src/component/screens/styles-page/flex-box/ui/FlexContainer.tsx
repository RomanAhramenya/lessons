import style from './../../styles-page.module.css'
interface IFlexContainerProps {
    refFlexContainer?: React.LegacyRef<HTMLDivElement>

    width?: number
}

const FlexContainer = (props: IFlexContainerProps) => {
    const { refFlexContainer, width } = props
    const handlerWidth = (width?: number) => {
        if (width) return { width: `${width}%` }
    }
    return (
        <div ref={refFlexContainer} className={style.flex_container}>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_1}`}>1</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_2}`}>2</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_3}`}>3</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_4}`}>4</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_5}`}>5</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_6}`}>6</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_7}`}>7</div>
            <div style={handlerWidth(width)} className={`${style.flex_item} ${style.item_8}`}>8</div>
        </div>
    )
}

export default FlexContainer