import { useRef, useState } from 'react'
import style from './../../styles-page.module.css'
import FlexContainer from './FlexContainer'
import Board from '../../../../visual-studio/Board'

type ITitle = 'dysplay: flex' | 'dysplay: inline-flex' | 'dysplay: block'
const DysplayFlex = () => {
    const [title, setTitle] = useState<ITitle>('dysplay: block')
    const refFlexContainer: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handlerFlex = () => {
        setTitle('dysplay: flex')
        if (refFlexContainer.current) refFlexContainer.current.style.display = 'flex';
    }
    const handlerInlineFlex = () => {
        setTitle('dysplay: inline-flex')
        if (refFlexContainer.current) refFlexContainer.current.style.display = 'inline-flex';
    }
    const handlerBlock = () => {
        setTitle('dysplay: block')
        if (refFlexContainer.current) refFlexContainer.current.style.display = 'block';
    }
    return (
        <>
            <div className={style.dysplay_flex_btn_group}>
                <button onClick={handlerBlock}>{"dysplay: block"}</button>
                <button onClick={handlerFlex}>{"dysplay: flex"}</button>
                <button onClick={handlerInlineFlex}>{"dysplay: inline-flex"}</button>
            </div>
            <Board>{title}</Board>
            <FlexContainer refFlexContainer={refFlexContainer} />
        </>

    )
}

export default DysplayFlex