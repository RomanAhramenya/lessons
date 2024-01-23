import { useEffect, useRef, useState } from "react"
import CustomLinkMain from './CustomLinkMain.tsx'
import style from './layout.module.css'
const BurgerMenu = () => {
    const [isMenu, setIsMenu] = useState(false)
    const refNav: React.LegacyRef<HTMLElement> = useRef(null)
    const handleClickMenu = () => {

        setIsMenu(true)


    }



    useEffect(() => {

        const handleDocumentClick = (event: any) => {
            if (refNav.current && !refNav.current.contains(event.target)) {
                refNav.current?.classList.remove(style.menu_animation_mount)
                refNav.current?.classList.add(style.menu_animation_unmount)
                setTimeout(() => {
                    setIsMenu(false);
                }, 100)

            }
        };

        document.addEventListener('mousedown', handleDocumentClick);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, [refNav])



    return (
        <>
            {!isMenu && <div onMouseMove={handleClickMenu} className={style.burger}>
                <span></span><span></span><span></span>
            </div>}
            {isMenu && <nav ref={refNav} className={`${style.nav} ${style.menu_animation_mount}`}>
                <h3>React</h3>
                <ul>
                    <li><CustomLinkMain to='/'>Todo</CustomLinkMain></li>
                    <li><CustomLinkMain to='router-dom'>React router dom 6</CustomLinkMain></li>
                    <li>  <CustomLinkMain to='ts'>Type script</CustomLinkMain></li>
                    <li>  <CustomLinkMain to='hooks'>Хуки</CustomLinkMain></li>
                </ul>
                <h3>Styles</h3>
                <ul>
                    <li>
                        <CustomLinkMain to='styles/flex-box'>Css</CustomLinkMain>
                    </li>
                </ul>
            </nav>}

        </>
    )
}

export default BurgerMenu