import { Outlet } from 'react-router-dom'

import Yellow from '../../visual-studio/Yellow'
import Board from '../../visual-studio/Board'
import Violet from '../../visual-studio/Violet'
import Red from '../../visual-studio/Red'
import Green from '../../visual-studio/Green'
import Blue from '../../visual-studio/Blue'


const BasicRoutePage = () => {

    return (
        <>
            <ul className="guide__list">

                <li className="guide__item">
                    <div>Установка</div>
                    <Board>
                        npm install react-router-dom
                    </Board>
                </li>
                <li className="guide__item">
                    <div>Базовый роутинг | первым делом оборачиваем компонент <Yellow>App</Yellow> в <Yellow>BrowserRouter</Yellow></div>
                    <Board placeholder='index.tsx || main.tsx'>
                        <Violet>import <Yellow>&#123;<Red>BrowserRouter</Red>&#125;</Yellow> from </Violet> <Green>'react-router-dom'</Green><br /><br />
                        <Yellow>
                            &lt;BrowserRouter&gt; <br />
                            &lt;App /&gt;<br />
                            &lt;/BrowserRouter&gt;</Yellow>
                    </Board>
                </li>
                <li className="guide__item">
                    <div>Создаем ссылки для перехода по страница <Yellow>Link</Yellow>, создаем <Yellow>Routes</Yellow> и
                        <Yellow> Route</Yellow> для наших страниц
                    </div>
                    <Board placeholder='App.tsx'>
                        <Yellow>
                            &lt;Link to=<Green>"/"</Green>&gt; Home &lt;/Link&gt; <br />
                            &lt;Link to=<Green>"/blog"</Green>&gt; Blog &lt;/Link&gt;<br />
                            &lt;Link to=<Green>"/about"</Green>&gt; About &lt;/Link&gt;<br /><br />
                            &lt;Routes&gt;<br />
                            &lt;Route path=<Green>'/'</Green> element=&#123;&lt;HomePage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'/about'</Green> element=&#123;&lt;AboutPage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'/blog'</Green> element=&#123;&lt;BlogPage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'*'</Green> element=&#123;&lt;HomePage /&gt;&#125; /&gt;<br />
                            &lt;/Routes&gt;
                        </Yellow>
                    </Board>
                </li>
                <li className="guide__item">
                    <div>Создаем <Blue>Layout.tsx</Blue>
                    </div>
                    <Board placeholder='Layout.tsx'>
                        <Yellow>
                            <Red>&lt;header&gt;</Red>     <br />
                            &lt;Link to=<Green>"/"</Green>&gt; Home &lt;/Link&gt; <br />
                            &lt;Link to=<Green>"/blog"</Green>&gt; Blog &lt;/Link&gt;<br />
                            &lt;Link to=<Green>"/about"</Green>&gt; About &lt;/Link&gt;<br />
                            <Red>&lt;/header&gt;</Red>    <br /><br />
                            <Red>&lt;main&gt;</Red> <br />
                            &lt;Outlet /&gt;<br />
                            <Red>&lt;/main&gt;</Red>    <br /><br />
                        </Yellow>
                        // footer

                    </Board>
                </li>
                <li className="guide__item">
                    <div> Помещаем наши пути в компонент <Yellow>Route</Yellow> в качестве <Green>element</Green> передаем <Yellow>Layout</Yellow>, в route который хоти сделать стартовой страницей добавляем аттребут <Red>index</Red>
                    </div>
                    <Board placeholder='App.tsx'>
                        <Yellow>
                            &lt;Routes&gt;<br />
                            &lt;Route path=<Green>'/'</Green> element=&#123;&lt;Layout /&gt;&#125; &gt;<br />
                            &lt;Route <Green>index</Green> element=&#123;&lt;HomePage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'about'</Green> element=&#123;&lt;AboutPage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'blog'</Green> element=&#123;&lt;BlogPage /&gt;&#125; /&gt;<br />
                            &lt;Route path=<Green>'*'</Green> element=&#123;&lt;NotFoundPage /&gt;&#125; /&gt;<br />
                            &lt;/Route&gt;<br />
                            &lt;/Routes&gt;
                        </Yellow>
                    </Board>
                </li>
            </ul>
            <Outlet />
        </>
    )
}

export default BasicRoutePage