"use client"
import {Dispatch, FC, MutableRefObject, ReactElement, useEffect} from "react";
import AuthCode from 'react-auth-code-input';
import {AuthCodeRef} from "react-auth-code-input";
import {classNames} from "@/utils/classNames";

interface OTPFormProps extends HTMLFormElement{
    value: string
    setValue: Dispatch<string>
    setInvalid: Dispatch<boolean>
    ref: MutableRefObject<AuthCodeRef | undefined>
    invalid: boolean
}

export const OTPForm: FC<Partial<OTPFormProps>> = ({setInvalid, setValue, value, ref,invalid}) => {
    useEffect(()=>{},[value])
    const handleOnChange = (res: string) => {
        if (setInvalid) {
            setInvalid(false)
        }
        if (typeof setValue !== 'undefined') setValue(res)
    };
    return <AuthCode
        containerClassName={"w-full flex flex-row items-between"}
        inputClassName={classNames("w-16 max-w-16 h-16 m-2 rounded-lg text-black text-center font-semibold grow text-xl group group-invalid", invalid ? "border-[#FF0000] bg-[#FFD3D3] border-2": "")}
        length={5}
        onChange={(res)=>handleOnChange(res)}
    />;
}


