import {FC} from "react";
import {classNames} from "@/utils/classNames";

interface InputProps extends HTMLInputElement {

}

export const Input: FC<Partial<InputProps>> = ({className, ...props}) => {
    const defaultClasses = classNames(" h-16 m-2 rounded-lg text-black text-center font-semibold grow text-xl group group-invalid")
    return (<input className={classNames( defaultClasses,className ?? "")} {...props} />)
}