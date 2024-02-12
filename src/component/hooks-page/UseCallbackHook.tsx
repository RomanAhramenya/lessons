import { Link } from "react-router-dom"
import Blue from "../visual-studio/Blue"
import style from './hooks-style.module.css'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react"
import Loader from "../ui/Loader"
import screen9 from './../../assets/images/hooks/Screenshot_9.png'
import screen10 from './../../assets/images/hooks/Screenshot_10.png'
import screen11 from './../../assets/images/hooks/Screenshot_11.png'
import screen12 from './../../assets/images/hooks/Screenshot_12.png'
import screen13 from './../../assets/images/hooks/Screenshot_13.png'
import screen14 from './../../assets/images/hooks/Screenshot_14.png'
import screen15 from './../../assets/images/hooks/Screenshot_15.png'
import screen16 from './../../assets/images/hooks/Screenshot_16.png'
import Yellow from "../visual-studio/Yellow"
interface IUseCallbackHookProps {

}

const UseCallbackHook = (props: IUseCallbackHookProps) => {
    const { } = props

    return (
        <ul className="guide__list">
            <li className="guide__item">
                <div><Blue>useCallback()</Blue> сохраняет ссылку на функцию , посмотрим в связке с <Blue><Link to='/hooks/use-ref'>useRef()</Link></Blue> </div>
            </li>
            <li className="guide__item">
                <div>Создадим блок с полосой прокрутки и когда scroll дойдет до конца будем подгружать данные</div>
                <div className="guide__img"><img src={screen9} alt="" /></div>
            </li>
            <li className="guide__item">
                <div>фукция <Blue>handleScroll()</Blue> завернута в use-callback для того что бы при перерисовке к ul всегда был привязан актуальный обработчик . В зависимостях указано value , для того что бы перезаписать функцию в случаее ввода текта пользоателем , так
                    как есть словие при котором подгрузка данных не должна происходить</div>
                <div className='guide_img'>
                    <img src={screen10} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <div>
                    дальше в <Link style={{ textDecoration: 'underline' }} to='/hooks/use-effect'><Blue>useEffect()</Blue></Link> при монтировании и измении ссылки на функцию добавляется актуальный орабочик и при размонтировании удаляется старый
                </div>
                <div className="guide__img"><img src={screen11} alt="" /></div>
            </li>
            <li className="guide__item">
                <PhotosList />
            </li>
            <li className="guide__item">
                <div>Следущий пример создадим счетик и посмотрим на <Blue>useCallback()</Blue> в связке с <Link style={{ textDecoration: 'underline' }} to='/hooks/use-memo'><Blue>memo()</Blue></Link></div>
            </li>

            <li className="guide__item">
                <Incriment />
            </li>
            <li className="guide__item">
                <div>При стандартном подходе</div>
                <div className="guide__img">
                    <img src={screen12} alt="" />
                </div>
                <div><Yellow>{"<ButtonsGroup/>"}</Yellow> всегда перерисовывается</div>
                <div className="guide__img">
                    <img src={screen13} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <div>для исправления придется работать в связке с <Link style={{ textDecoration: 'underline' }} to='/hooks/use-memo'><Blue>memo()</Blue></Link>  </div>

                <div>обернем фунцкии в <Blue>useCallback()</Blue> для того что бы это всегда была одна и таже ссылка</div>
                <div className="guide__img">
                    <img src={screen14} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <div>
                    обернем <Yellow>{"<ButtonsGroup/>"}</Yellow>  в <Blue>memo()</Blue>, для того что бы явно указать не делать перерисовку , до тех пор пока не изменятся пропсы
                </div>

                <div className="guide__img">
                    <img src={screen15} alt="" />
                </div>
            </li>
            <li className="guide__item">
                <div>
                    как итог <Yellow>{"<ButtonsGroup/>"}</Yellow> не перерисовывается
                </div>

                <div className="guide__img">
                    <img src={screen16} alt="" />
                </div>
            </li>
        </ul>
    )
}

export default UseCallbackHook

interface IPhoto {
    albumId?: number
    id: number
    title: string
    url?: string
    thumbnailUrl: string
}


const PhotosList = () => {


    const ulRef: React.LegacyRef<HTMLUListElement> = useRef(null)
    const [photos, setPhotos] = useState<IPhoto[]>([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState('')

    useEffect(() => {
        setLoading(true)
        fetch(`https://jsonplaceholder.typicode.com/photos?_limit=10&_page=${page}`)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setPhotos(prev => [...prev, ...data])
            })


    }, [page])

    let photosFilter = photos.filter(li => li.title.includes(value))

    const handleScroll = useCallback((e: any) => {
        let element = e.target;

        if ((element.scrollHeight - element.scrollTop === element.clientHeight) && !value) {
            setPage(prev => prev + 1);
        }

    }, [value]);

    useEffect(() => {
        ulRef.current?.addEventListener('scroll', handleScroll)

        return () => {
            ulRef.current?.removeEventListener('scroll', handleScroll);
        };

    }, [handleScroll])

    return (
        <>
            <PhotosSearch value={value} setValue={setValue} />
            <ul ref={ulRef} className={style.photos__list}>
                {photos.length > 0 ? photosFilter.map(item => <PhotoItem key={item.id} {...item} />) : <li><Loader /></li>}
                {loading && <li style={{ position: "relative" }}><Loader /></li>}
            </ul>
        </>
    )
}

const PhotoItem = (props: IPhoto) => {
    const { id, title, thumbnailUrl } = props
    return (
        <li className={style.photos__item}>
            <div className={style.photos__item_id}>{id}</div>
            <p className={style.photos__item_title}>{title}</p>
            <div className={style.photos__item_img}><img src={thumbnailUrl} alt="" /></div>
        </li>
    )
}
interface ISearch {
    value: string
    setValue: (value: string) => void

}
const PhotosSearch = (props: ISearch) => {
    const { value, setValue } = props


    const handleChangeSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue(e.target.value)
    }


    return (
        <div className={style.photos__search}>
            <label htmlFor="">
                <input onChange={handleChangeSearch} placeholder="поиск" value={value} type="search" />
            </label>


        </div>
    )
}

const Incriment = () => {
    console.log('render incriment')
    const [count, setCount] = useState(0)

    const handleCountPlus = useCallback(() => {
        setCount(prev => prev + 1)
    }, [])
    const handleCountMinus = useCallback(() => {
        setCount(prev => prev - 1)
    }, [])
    return (
        <div className={style.incriment}>
            <p className={style.incriment__title}>{count}</p>
            <ButtonsGroup handleCountPlus={handleCountPlus} handleCountMinus={handleCountMinus} />
        </div>
    )
}

interface IButtonsGroup {
    handleCountPlus: () => void
    handleCountMinus: () => void
}
const ButtonsGroup = memo((props: IButtonsGroup) => {
    console.log('render ButtonsGroup')
    const { handleCountMinus, handleCountPlus } = props
    return (
        <div className={style.incriment__buttons}>
            <button className="custom_btn" onClick={handleCountPlus}>+</button>
            <button className="custom_btn" onClick={handleCountMinus}>-</button>
        </div>
    )
})