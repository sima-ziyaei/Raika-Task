import { FC, ReactNode } from "react"

interface Props {
    children : ReactNode,
    className?: string
}

const Button : FC<Props> = ({children, className}) =>{
    return(
        <button className={` ${className} bg-gradient-button py-[18px] px-[25px] rounded-xl flex `}>
            {children}
        </button>
    )
};

export default Button;