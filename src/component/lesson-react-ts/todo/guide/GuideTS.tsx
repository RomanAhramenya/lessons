import reactImg from './../../../../assets/images/icons/react.png'
import tsImg from './../../../../assets/images/icons/ts.png'
import FormTS from './FormTS'
import GuideTSChildren from './GuideTSChildren'
import LimitedProps from './LimitedProps'
import PolimorfComponent from './PolimorfComponent'
interface IGuideProps {

    // стандартное поведение можно добовлять любое количество элементов
    // children: string  типа для батона примет только строку даже нельзя завернуть в input
    // children: ReactChilde позволит передать только один элемент
}
// если добавить перед элементом :FC то можно не указывать children в interface
const GuideTS = (props: IGuideProps) => {
    const { } = props

    return (
        <section className="section">

            <h2 className="section__title">Типизацая React</h2>
            <ul className="tags__list">
                <li className="tags__items"><a href="#"><img src={reactImg} alt="" /></a></li>
                <li className="tags__items"><a href="#"><img src={tsImg} alt="" /></a></li>

            </ul>
            <GuideTSChildren />
            <LimitedProps />
            <PolimorfComponent />
            <FormTS />

        </section>
    )
}

export default GuideTS

