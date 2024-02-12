import { useEffect, useState } from "react"
import Loader from "../../ui/Loader"

interface IPhoto {
    albumId?: number
    id: number
    title: string
    url?: string
    thumbnailUrl: string
}

const Images = () => {
    const [data, setData] = useState<IPhoto[] | null>(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])



    if (data) {
        return (
            data.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <div>
                        <img src={item.thumbnailUrl} alt="" />
                    </div>
                </div>
            )
            ))
    }
    else {
        return <Loader />
    }

}
export default Images