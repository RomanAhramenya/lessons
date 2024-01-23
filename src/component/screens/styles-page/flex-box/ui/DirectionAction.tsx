
import { useEffect, useRef, useState } from 'react'
import style from './../../styles-page.module.css'
import FlexContainer from './FlexContainer'
import Board from '../../../../visual-studio/Board'

type ITitle = 'flex-direction: row;' | 'flex-direction: row-reverse;' | 'flex-direction: column;' | 'flex-direction: column-reverse;'



const DirectionAction = () => {
    const [title, setTitle] = useState<ITitle>('flex-direction: row;')
    const refFlexContainer: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handlerRow = () => {
        setTitle('flex-direction: row;')
        if (refFlexContainer.current) refFlexContainer.current.style.flexDirection = 'row';
    }
    const handlerRowReverse = () => {
        setTitle('flex-direction: row-reverse;')
        if (refFlexContainer.current) refFlexContainer.current.style.flexDirection = 'row-reverse';
    }
    const handlerColumn = () => {
        setTitle('flex-direction: column;')
        if (refFlexContainer.current) refFlexContainer.current.style.flexDirection = 'column';
    }
    const handlerColumnReverse = () => {
        setTitle('flex-direction: column-reverse;')
        if (refFlexContainer.current) refFlexContainer.current.style.flexDirection = 'column-reverse';
    }
    useEffect(() => {
        if (refFlexContainer.current) refFlexContainer.current.style.display = 'flex';
    }, [])
    return (
        <>
            <div className={style.dysplay_flex_btn_group}>
                <button onClick={handlerRow}>{"flex-direction: row;"}</button>
                <button onClick={handlerRowReverse}>{"flex-direction: row-reverse;"}</button>
                <button onClick={handlerColumn}>{"flex-direction: column;"}</button>
                <button onClick={handlerColumnReverse}>{"flex-direction: column-reverse;"}</button>
            </div>
            <Board>{title}</Board>
            <FlexContainer refFlexContainer={refFlexContainer} />
        </>
    )
}

export default DirectionAction