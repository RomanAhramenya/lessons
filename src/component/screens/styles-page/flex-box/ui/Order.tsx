import { useRef, useState } from 'react'
import style from './../../styles-page.module.css'



const Order = () => {
    const [order_1, setOrder_1] = useState('0')
    const [order_2, setOrder_2] = useState('0')
    const refItem_1: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handleOrder_1 = (value: string) => {
        if (refItem_1.current) {
            setOrder_1(value)
            refItem_1.current.style.order = value
        }
    }

    const refItem_2: React.LegacyRef<HTMLDivElement> = useRef(null)

    const handleOrder_2 = (value: string) => {
        if (refItem_2.current) {
            setOrder_2(value)
            refItem_2.current.style.order = value
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
            <h3 className={style.title}>Order</h3>
            <p>order может менять порядок элементов </p>

            <ul style={{ fontSize: '16px', display: 'flex', gap: '5px' }}>
                <li style={styleLi}> Item 3
                    <button onClick={() => handleOrder_1('-2')} style={styleBtn}>order: -2;</button>
                    <button onClick={() => handleOrder_1('-1')} style={styleBtn}>order: -1;</button>
                    <button onClick={() => handleOrder_1('0')} style={styleBtn}>order: 0;</button>
                    <button onClick={() => handleOrder_1('1')} style={styleBtn}>order: 1;</button>
                    <button onClick={() => handleOrder_1('2')} style={styleBtn}>order: 2;</button>

                </li>
                <li style={styleLi}> Item 4
                    <button onClick={() => handleOrder_2('-2')} style={styleBtn}>order: -2;</button>
                    <button onClick={() => handleOrder_2('-1')} style={styleBtn}>order: -1;</button>
                    <button onClick={() => handleOrder_2('0')} style={styleBtn}>order: 0;</button>
                    <button onClick={() => handleOrder_2('1')} style={styleBtn}>order: 1;</button>
                    <button onClick={() => handleOrder_2('2')} style={styleBtn}>order: 2;</button>
                </li>

            </ul>


            <div style={{
                display: 'flex',
                border: 'solid 1px gray',
                background: '#bdf800',
                textTransform: 'capitalize',

                height: '300px'
            }}>

                <div style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >1</div>

                <div style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >2 </div>

                <div ref={refItem_1} style={{
                    background: "#008b48", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >3</div>
                <div ref={refItem_2} style={{
                    background: "#00438b", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >4</div>
                <div style={{
                    background: "#690072", margin: '0',
                    padding: '10px 20px',
                    border: 'solid 1px black',
                    textAlign: 'center',


                }} >5</div>
            </div>
        </section>
    )
}

export default Order