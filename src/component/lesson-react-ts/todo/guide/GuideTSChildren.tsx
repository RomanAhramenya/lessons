import Board from "../../../visual-studio/Board"
import Red from "../../../visual-studio/Red"
import Violet from "../../../visual-studio/Violet"
import Yellow from "../../../visual-studio/Yellow"
import screen1Img from './../../../../assets/images/guideTs/Screenshot_children-1.png'
import screen2Img from './../../../../assets/images/guideTs/Screenshot_children-2.png'
import screen3Img from './../../../../assets/images/guideTs/Screenshot_children-3.png'
interface IGuideTSChildrenProps {

}

const GuideTSChildren = (props: IGuideTSChildrenProps) => {
    const { } = props

    return (
        <div>
            <h3>Типизация children props</h3>
            <ul className="guide__list">
                <li className="guide__item ">
                    <div className="guide_text">Стандартное поведение можно будет передать любое количество элементов</div>
                    <div className="guide_img"><img src={screen1Img} alt="" /></div>
                    <Board><Violet>interface</Violet> <Yellow>IGuideProps &#123;</Yellow><br />
                        <Red>children:</Red> <Yellow>React.ReactNode</Yellow><br />
                        <Yellow>&#125;</Yellow>
                    </Board>
                </li>
                <li className="guide__item ">
                    <div className="guide_text">Пример когда хотим передать примитивный тип например для customButton</div>
                    <div className="guide_img"><img src={screen2Img} alt="" /></div>
                    <Board><Violet>interface</Violet> <Yellow>IGuideProps &#123;</Yellow><br />
                        <Red>children:</Red> <Yellow>string</Yellow><br />
                        <Yellow>&#125;</Yellow>
                    </Board>
                </li>
                <li className="guide__item ">
                    <div className="guide_text">Передать только один элемент? используем ReactChild или JSX.Element </div>
                    <div className="guide_img"><img src={screen3Img} alt="" /></div>
                    <Board><Violet>interface</Violet> <Yellow>IGuideProps &#123;</Yellow><br />
                        <Red>children:</Red> <Yellow>ReactChild</Yellow><br />
                        <Yellow>&#125;</Yellow>
                    </Board>
                </li>
            </ul>
        </div>
    )
}

export default GuideTSChildren