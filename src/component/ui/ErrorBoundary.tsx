import React, { Component } from 'react';
import img from './../../assets/images/sorry-oops.gif'
import style from './error.module.css'
import { Link, useNavigate } from 'react-router-dom';
import GoBack from './GoBack';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
    error?: string
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: '' };

    }



    static getDerivedStateFromError(error: Error) {
        return {
            hasError: true,
            error: error?.message

        }
    }
    componentDidCatch(error: Error) {
        this.setState({ hasError: true, error: error.message });
    }

    render() {

        if (this.state.hasError) {
            return <div className={style.container}>
                <div className={style.image_box}>
                    <img className={style.img} src={img} alt="" />
                </div>
                <div className={style.static_text} >Произошла ошибка: </div>
                <div className={style.error_text}>{this.state.error}</div>
                <GoBack />
            </div>;
        }
        else {

            return this.props.children;
        }

    }
}

export default ErrorBoundary;

