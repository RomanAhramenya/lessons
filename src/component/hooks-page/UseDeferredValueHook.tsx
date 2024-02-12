import { Suspense, useDeferredValue, useEffect, useState } from "react"
import style from './hooks-style.module.css'


const UseDeferredValueHook = () => {


    return (
        <ul className="guide__list">
            <li className="guide__item">UseDeferredValue</li>
            <li className="guide__item">

                <ItemsList />


            </li>
        </ul>
    )
}

export default UseDeferredValueHook


interface IPhoto {
    albumId?: number
    id: number
    title: string
    url?: string
    thumbnailUrl: string
}



const ItemsList = () => {
    const [value, setValue] = useState('')
    const [photo, setPhoto] = useState<IPhoto[]>([])
    const [filterPhoto, setFilterPhoto] = useState<IPhoto[]>([])
    const deferredValue = useDeferredValue(value)


    const handlerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value
        setValue(value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then(data => setPhoto(data))
    }, [])


    useEffect(() => {
        setFilterPhoto(photo.filter(item => item.title.includes(deferredValue)))
    }, [deferredValue])

    const deferredPhoto = useDeferredValue(filterPhoto)


    return (
        <div>
            <div className={style.search}>
                <input placeholder="search" onChange={handlerChange} value={value} type="search" />
            </div>

            <Suspense fallback={<Loader />}>
                <SearchResult data={deferredPhoto} />
            </Suspense>
        </div>
    )
}

interface ISearchResult {

    data: IPhoto[]
}
const SearchResult = (props: ISearchResult) => {
    const { data } = props

    return (
        <>
            {data.map(item => (
                <ItemPhoto key={item.id} id={item.id} title={item.title} thumbnailUrl={item.thumbnailUrl} />
            ))}
        </>
    )
}

const ItemPhoto = (props: IPhoto) => {
    const { id, title, thumbnailUrl } = props
    return (
        <div>
            <div>{id}</div>
            <p>{title}</p>
            <div><img src={thumbnailUrl} alt="" /></div>
        </div>
    )
}
const Loader = () => {

    return (
        <div>Loading</div>
    )
}