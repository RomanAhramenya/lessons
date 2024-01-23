import Board from "../../visual-studio/Board"
import Green from "../../visual-studio/Green"
import Red from "../../visual-studio/Red"
import Violet from "../../visual-studio/Violet"
import Yellow from "../../visual-studio/Yellow"

interface IHistoryLocationPageProps {

}

const HistoryLocationPage = (props: IHistoryLocationPageProps) => {
    const { } = props

    return (
        <ul className="guide__list">
            <li className="guide__item">
                <div>useNavigate ()</div>
                <Board>
                    <Violet>import</Violet> <Yellow>&#123; <Red>useNavigate</Red> &#125;</Yellow> <Green>"react-router-dom"</Green>
                </Board>
            </li>
            <li className="guide__item">
                <div>Движение по страницам вперед назад</div>
                <Board>
                    const navigate = useNavigate(); <br />

// const goBack = () =&gt; navigate('/posts') <br />
                    const goBack = () =&gt; &#123; <br />

                    navigate(-1) <br />
                    &#125;<br />
                    const goForward = () =&gt; &#123; <br />

                    navigate(1) <br />
                    &#125; <br />
                </Board>
            </li>
            <li className="guide__item">
                <div> Переадресация</div>
                <Board>
                    <Violet>import</Violet> <Yellow>&#123; <Red>Navigate</Red> &#125;</Yellow> <Green>"react-router-dom"</Green>
                </Board>
                <Board>
                    <Yellow>
                        &lt;Route path=<Green>'about'</Green> element= &#123; &lt;AboutPage /&gt; &#125; /&gt; <br />
                        &lt;Route path=<Green>'about-us'</Green> element= &#123; &lt;Navigate to=<Green>"/about"</Green> replace /&gt; &#125; /&gt;
                    </Yellow>
                </Board>
            </li>
            <li className="guide__item">
                <div> Приватные роуты</div>
                <li className="guide__item"></li>
            </li>
        </ul>
    )
}

export default HistoryLocationPage