import { Link, useMatch, NavLinkProps } from "react-router-dom"
import style from "./react-router-guide.module.css"

interface ICustomLinkProps extends NavLinkProps {
    children: React.ReactNode
    to: string
    parent: string
}

const CustomLink = (props: ICustomLinkProps) => {
    const { children, to, parent } = props
    const match = useMatch({
        path: `${parent}${to}`,
        end: to.length === 0
    })
    return (

        <Link className={match ? style.active_link : ""} to={to} >
            {children}
        </Link>
    )
}

export default CustomLink