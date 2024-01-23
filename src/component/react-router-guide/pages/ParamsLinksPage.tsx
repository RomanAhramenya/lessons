import Blue from "../../visual-studio/Blue"
import Board from "../../visual-studio/Board"
import Green from "../../visual-studio/Green"
import Red from "../../visual-studio/Red"
import Violet from "../../visual-studio/Violet"
import Yellow from "../../visual-studio/Yellow"
import screenParams from './../../../assets/images/guides-react-router-dom/Screenshot_params.png'
interface IParamsLinksPageProps {

}

const ParamsLinksPage = (props: IParamsLinksPageProps) => {
    const { } = props

    return (
        <>
            <ul className="guide__list">
                <li className="guide__item">
                    <div>useMatch ()</div>
                    <Board>
                        <Violet>import</Violet> <Yellow>&#123; <Red>useParams</Red> &#125;</Yellow> <Green>"react-router-dom"</Green>
                    </Board>
                </li>
                <li className="guide__item">
                    <div>пердача параметров</div>
                    <Board>
                        &lt;<Yellow>Route path=<Green>'blog/:id'</Green> element=&#123;&lt;SingPage /&gt;&#125;</Yellow> /&gt;
                    </Board>
                </li>
                <li className="guide__item">
                    <div>Забрать параметр</div>
                    <Board>
                        <Violet>const &#123; <Yellow>id</Yellow> &#125; <Blue>= useParams</Blue>()</Violet>
                    </Board>
                </li>
                <li className="guide__item">
                    <div className="guide__img">
                        <img src={screenParams} alt="" />
                    </div>
                </li>
            </ul>
        </>
    )
}

export default ParamsLinksPage