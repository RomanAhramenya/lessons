import Blue from "../../visual-studio/Blue"
import Board from "../../visual-studio/Board"
import Green from "../../visual-studio/Green"
import Red from "../../visual-studio/Red"
import Violet from "../../visual-studio/Violet"
import Yellow from "../../visual-studio/Yellow"
import screenClassActive from './../../../assets/images/guides-react-router-dom/Screenshot_class-active.png'
import screenisActive from './../../../assets/images/guides-react-router-dom/Screenshot_isActive.png'
interface ICustomLinkPageProps {

}

const CustomLinkPage = (props: ICustomLinkPageProps) => {
    const { } = props

    return (

        <ul className="guide__list">
            <li className="guide__item">
                <div>Если хотим добвать <Red>class:<Green>'active'</Green></Red> , то в место тега <Yellow>Link</Yellow> ,используем тег <Yellow>NavLink</Yellow>,
                    <Red> class:<Green>'active'</Green></Red> добавиться автоматически,нам лишь остается описать этот класс в <Blue>css</Blue>
                </div>
                <div className="guide__img">
                    <img src={screenClassActive} alt="" />
                </div>
                <Board placeholder='Layout.tsx'>
                    <Yellow>
                        <Red>&lt;header&gt;</Red>     <br />
                        &lt;NavLink to=<Green>"/"</Green>&gt; Home &lt;/NavLink&gt; <br />
                        &lt;NavLink to=<Green>"/blog"</Green>&gt; Blog &lt;/NavLink&gt;<br />
                        &lt;NavLink to=<Green>"/about"</Green>&gt; About &lt;/NavLink&gt;<br />
                        <Red>&lt;/header&gt;</Red>    <br /><br />
                        <Red>&lt;main&gt;</Red> <br />
                        &lt;Outlet /&gt;<br />
                        <Red>&lt;/main&gt;</Red>    <br /><br />
                    </Yellow>
                        // footer

                </Board>
            </li>
            <li className="guide__item">
                <div>Если хотим создать свой  <Red>class</Red> для активной ссылки
                </div>

                <Board placeholder='Layout.tsx'>

                    <Violet>interface</Violet> <Yellow>NavLinkRenderProps &#123; <br />
                        <Red>isActive:</Red> boolean <br />
                        &#125;</Yellow><br /><br />
                    <Violet>const <Blue>Layout = </Blue><Yellow>()</Yellow> =&gt; <Yellow>&#123;</Yellow></Violet>  <br /> <br />
                    <Violet>const <Blue>setActive =</Blue> (<Blue>&#123;<Red> isActive </Red>&#125;</Blue><Yellow>: NavLinkRenderProps<Violet>)</Violet>: string <Violet>=&gt;</Violet> <Red>isActive </Red><Violet>? </Violet>style</Yellow>.<Red>active_link</Red> : <Green>''</Green><br /><br />
                        return (</Violet> <br /><br />
                    &lt;&gt;
                    <Yellow>
                        <Red>&lt;header&gt;</Red>     <br />
                        &lt;NavLink className=&#123;<Red> setActive </Red>&#125; to=<Green>"/"</Green>&gt; Home &lt;/NavLink&gt; <br />
                        &lt;NavLink className=&#123;<Red> setActive </Red>&#125; to=<Green>"/blog"</Green>&gt; Blog &lt;/NavLink&gt;<br />
                        &lt;NavLink className=&#123;<Red> setActive </Red>&#125; to=<Green>"/about"</Green>&gt; About &lt;/NavLink&gt;<br />
                        <Red>&lt;/header&gt;</Red>    <br /><br />
                        <Red>&lt;main&gt;</Red> <br />
                        &lt;Outlet /&gt;<br />
                        <Red>&lt;/main&gt;</Red>    <br /><br />
                    </Yellow>
                        // footer

                </Board>
            </li>
            <li className="guide__item">
                <div>Еще вариант исполнения</div>
                <div className="guide__img"><img src={screenisActive} alt="" /></div>
            </li>
            <li className="guide__item">
                <div><Yellow>CustomLink</Yellow></div>
                <Board placeholder='CustomLink.tsx'>
                    <Violet>import</Violet> &#123;<Red> Link ,useMatch </Red>&#125; <Violet>from</Violet> <Green>"react-router-dom"</Green><br />
                    <Violet>import</Violet> <Red>style</Red> <Violet>from </Violet><Green>"./*.module.css"</Green><br /> <br />
                    <Violet>interface</Violet> <Yellow>ICustomLinkProps &#123; <br />
                        <Red>children</Red>: React.ReactNode <br />
                        <Red>to</Red>: string <br />
                        &#125;
                    </Yellow> <br /><br />
                    <Violet>const</Violet> <Blue>CustomLink = </Blue><Yellow>(<Red>props</Red>: ICustomLinkProps) <Violet>=&gt;</Violet> &#123;</Yellow> <br />
                    <Violet>const &#123; <Yellow>children, to</Yellow> &#125; = <Red>props</Red><br />
                        const </Violet><Yellow>match</Yellow> <Blue>= useMatch(<Red>to</Red>)</Blue> <br /><br />

                    <Violet>return (</Violet><br /><br />
                    <Yellow>&lt;Link className<Blue>=&#123; </Blue><Red>match ? <Yellow>style.</Yellow>active_link : </Red><Green>""</Green><Blue> &#125;</Blue> to<Blue>=&#123;<Red>to</Red>&#125;</Blue> &gt;<br />
                        <Blue>&#123;<Red> children </Red>&#125;</Blue> <br />
                        &lt;/Link&gt;<br />
                        ) <br />
                        &#125;
                    </Yellow> <br /><br />
                    <Violet>export default <Red>CustomLink</Red></Violet>
                </Board>
            </li>
        </ul>

    )
}

export default CustomLinkPage