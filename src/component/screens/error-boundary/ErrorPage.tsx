import Board from '../../visual-studio/Board'
import reactImg from './../../../assets/images/icons/react.png'
import img from './../../../assets/images/suspense/Screenshot_2.png'
const ErrorPage = () => {


    return (
        <section className='section'>


            <h2 className='section__title'>ErrorBoundary</h2>
            <ul className="tags__list">
                <li className="tags__items"><a href="#"><img src={reactImg} alt="" /></a></li>
            </ul>
            <ul className='guide__list'>
                <li className='guide__item'>
                    <Board>
                        {"import React, { Component } from 'react';"} <br /> <br /> <br />
                        {"interface Props {"} <br />
                        {"children: React.ReactNode;"} <br />
                        {"}"} <br />
                        <br />
                        {"interface State {"} <br />
                        {"hasError: boolean;"} <br />
                        {"error?: string"} <br />
                        {"}"} <br />
                        <br />
                        {"class ErrorBoundary extends Component<Props, State> {"} <br />
                        {"constructor(props: Props) {"} <br />
                        {"super(props);"} <br />
                        {"this.state = { hasError: false, error: '' };"} <br />
                        {"}"} <br />
                        <br />
                        {"static getDerivedStateFromError(error: Error) {"} <br />
                        {"return {"} <br />
                        {"hasError: true,"} <br />
                        {" error: error?.message"} <br />
                        {"}"} <br />
                        {"}"} <br />
                        <br />
                        {"componentDidCatch(error: Error) {"} <br />
                        {"this.setState({ hasError: true, error: error.message });"} <br />
                        {"}"} <br />
                        {"render() {"} <br />
                        <br />
                        {"if (this.state.hasError) {"} <br />
                        {"return <div>{this.state.error}</div>"} <br />
                        {"}"} <br />
                        <br />
                        {"return this.props.children;"} <br />
                        {"}"} <br />
                        {"}"} <br />
                        <br />
                        <br />
                        {"export default ErrorBoundary;"} <br />
                        {""} <br />
                        {""} <br />
                        {""} <br />








                    </Board>
                </li>
                <li className='guide__item'>
                    <div className='guide__img'>
                        <img src={img} alt="" />
                    </div>
                </li>

                <li className='guide__item'>

                </li>
            </ul>


        </section>
    )
}

export default ErrorPage