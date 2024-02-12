import style from './loader.module.css'

const Loader = () => {


    return (
        <>
            <div className={style.loader_list}>
                <div className={`${style.loader_item} ${style.loader_item__1}`}></div>
                <div className={`${style.loader_item} ${style.loader_item__2}`}></div>
                <div className={`${style.loader_item} ${style.loader_item__3}`}></div>
                <div className={`${style.loader_item} ${style.loader_item__4}`}></div>
            </div>
        </>
    )
}

export default Loader