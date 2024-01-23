
import style from './react-router-guide.module.css'
import { useState } from "react";
interface ISearchPostProps {
    setSearch: (blog: string, latest: boolean) => void
}


const SearchPost = (props: ISearchPostProps) => {
    const { setSearch } = props


    const [value, setValue] = useState('')
    const [isLatest, setIsLatest] = useState(false)

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement
        const query = form.search.value
        const latest = form.latest.checked
        setSearch(query, latest);
    }

    return (
        <form style={{ marginBottom: '20px' }} className={style.search__form} onSubmit={handleSubmit}>

            <label> <input value={value} onChange={(e) => setValue(e.target.value)} type="search" name="search" /></label>
            <label className={style.checked}> <input name='latest' checked={isLatest} onChange={e => setIsLatest(e.target.checked)} type="checkbox" /><span>последние 20</span></label>
            <button type='submit'>поиск</button>
        </form>
    )

}
export default SearchPost