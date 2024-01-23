
import Red from "../../../visual-studio/Red"
import Violet from "../../../visual-studio/Violet"
import Yellow from "../../../visual-studio/Yellow"
import screen1Img from './../../../../assets/images/guideTs/Screenshot_polimorf-1.png'
import screen2Img from './../../../../assets/images/guideTs/Screenshot_polimorf-2.png'
import screen3Img from './../../../../assets/images/guideTs/Screenshot_polimorf-3.png'
import screen4Img from './../../../../assets/images/guideTs/Screenshot_polimorf-4.png'
import screen5Img from './../../../../assets/images/guideTs/Screenshot_polimorf-5.png'
import { ElementType, ComponentProps } from 'react'
interface IPolimorfComponentProps {

}

const PolimorfComponent = (props: IPolimorfComponentProps) => {
    const { } = props

    return (
        <div>
            <h3>Полиморфные React компоненты</h3>
            <ul className="guide__list">
                <li className="guide__item ">
                    <div className="guide__text">
                        Пример мы создаем button который в каких то случаех может быть кнопкой а в каком то например ссылкой . Ниже посмотрим на реализацию
                    </div>

                    {/* <Board>
                        import &#123; ComponentProps, ElementType &#125; from "react"<br /><br />

                        type TextOwnProps&lt;E extends ElementType = ElementType&gt; = &#123;<br />
                        children: string;<br />
                        as?: E <br />
                        &#125; <br /><br />

                        type TextProps&lt;E extends ElementType&gt; = TextOwnProps&lt;E&gt; & <br /> Omit&lt;ComponentProps&lt;E&gt;, keyof TextOwnProps&gt; <br /><br />
                        const defaultElement = "div" <br /> <br />

                        export default function Text&lt;E extends ElementType = typeof defaultElement&gt;(&#123; <br />
                        children, <br />
                        as, <br />
                        ...otherProps <br />
                        &#125;:TextProps&lt;E&gt;)&#123; <br />
                        const TagName = as || defaultElement; <br /><br />
                        return &lt;TagName &#123;...otherProps&#125;&gt;&#123;children&#125; &lt;/TagName&gt; <br />
                        &#125;
                    </Board> */}
                </li>
                <li className="guide__item ">
                    <div className="guide__text">
                        Превращаем props в джинерик :<Yellow>E</Yellow>  который ограничеваем до ,<Yellow>ElementType</Yellow>  (экспортируем из риакт) и так же сделаем его дефолтным в случаи если <Red>as?</Red> в props не переданно
                    </div>
                    <div className="guide__img"><img src={screen1Img} alt="" /></div>
                </li>
                <li className="guide__item ">
                    <div className="guide__text">
                        ElementType это то что по сути является HTML элемантами
                    </div>
                    <div className="guide__img"><img src={screen2Img} alt="" /></div>
                </li>
                <li className="guide__item ">
                    <div className="guide__text">
                        Создаем  <Violet>type ButtonProps</Violet> который принимает джинерик <Yellow>E <Violet>extends</Violet> ElementType </Yellow>
                        ,который дополняется <Yellow>ComponentProps </Yellow> (import 'react') , из которого выкидываются все лишние пропсы
                    </div>
                    <div className="guide__img"><img src={screen3Img} alt="" /></div>
                </li>
                <li className="guide__item ">
                    <div className="guide__text">
                        Итоговый код
                    </div>
                    <div className="guide__img"><img src={screen5Img} alt="" /></div>
                </li>
                <li className="guide__item ">
                    <div className="guide__text">
                        Пример
                    </div>
                    <div className="guide__img">
                        <Button style={{ border: 'solid 1px #1e242c', padding: '5px 10px', color: 'white' }}>Я кнопка</Button>
                        <Button as="a" href='/#' style={{ border: 'solid 1px #1e242c', padding: '5px 10px', color: 'white' }}>Я ссылка</Button>
                        <Button as="div" style={{ border: 'solid 1px #1e242c', padding: '5px 10px', color: 'white', margin: '0' }}>Я div</Button>
                    </div>
                    <div className="guide__img">
                        <img src={screen4Img} alt="" />
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default PolimorfComponent


type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: string
    as?: E
}
type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>

const defaultElement = 'button'

function Button<E extends ElementType = typeof defaultElement>({ children, as, ...otherProps }: ButtonProps<E>) {

    const TagName = as || defaultElement
    return <TagName  {...otherProps}>{children}</TagName>
}