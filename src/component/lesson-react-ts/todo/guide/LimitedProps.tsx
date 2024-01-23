import Board from "../../../visual-studio/Board"
import Red from "../../../visual-studio/Red"
import Violet from "../../../visual-studio/Violet"
import Yellow from "../../../visual-studio/Yellow"

interface ILimitedPropsProps {

}

const LimitedProps = (props: ILimitedPropsProps) => {
    const { } = props

    return (
        <div>
            <h3>Лимитирование пропсов</h3>
            <ul className="guide__list">
                <li className="guide__item ">
                    <div className="guide_text">Если мы хоти лимитировать пропсы</div>
                    <Board>
                        <Violet>type</Violet> <Yellow>CommonButtonProps = &#123;</Yellow><br />
                        <Red>children:</Red> <Yellow>string</Yellow>;<br />
                        <Red>arrow?:</Red> <Yellow>boolean</Yellow>;<br />
                        <Red>icon?:</Red> <Yellow>ReactNode</Yellow>;<br />
                        <Red>disabled?:</Red> <Yellow>boolean</Yellow>;<br />
                        <Yellow>&#125;</Yellow><br /><br />

                        <Violet>type</Violet> <Yellow>PrimaryButtonProps = CommonButtonProps &  &#123; <Red>primary:</Red>boolean, <Red>secondary?:</Red> never &#125;</Yellow><br />
                        <Violet>type</Violet> <Yellow>SecondaryButtonProps = CommonButtonProps &  &#123; <Red>secondary:</Red>boolean, <Red>primary?:</Red> never &#125;</Yellow><br /><br />
                        <Violet>type</Violet> <Yellow>ButtonProps = PrimaryButtonProps | SecondaryButtonProps</Yellow><br />
                    </Board>
                </li>
                {/* <li className="guide__item ">
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
                </li> */}
            </ul>
        </div>
    )
}

export default LimitedProps