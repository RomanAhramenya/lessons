

import reactImg from './../../../assets/images/icons/react.png'
import screen1 from './../../../assets/images/suspense/Screenshot_1.png'




const SuspensePage = () => {


    return (
        <>
            <section className='section'>


                <h2 className='section__title'>"Suspense"</h2>
                <ul className="tags__list">
                    <li className="tags__items"><a href="#"><img src={reactImg} alt="" /></a></li>
                </ul>
                <ul className='guide__list'>
                    <li className='guide__item'>
                        в основном используется для того, что не загружать целый bundle сразу...а подгружать страницы по мере посещения
                    </li>
                    <li className='guide__item'>
                        <div className="guide__img">
                            <img src={screen1} alt="" />
                        </div>
                    </li>
                    <li className='guide__item'>
                        у меня коректно работает только в этом примере!!! пробовал вставлять не в роутинге, шило полное
                    </li>

                </ul>


            </section>
        </>

    )
}

export default SuspensePage


