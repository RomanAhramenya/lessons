import { Link, useMatch } from "react-router-dom"
import style from "./layout.module.css"

interface ICustomLinkMainProps {
    children: React.ReactNode
    to: string
}

const CustomLinkMain = (props: ICustomLinkMainProps) => {
    const { children, to } = props
    const match = useMatch({
        path: to,
        end: to.length === 1
    })

    return (

        <Link className={match ? style.active_link : ""} to={to} >
            {children}
        </Link>
    )
}

export default CustomLinkMain