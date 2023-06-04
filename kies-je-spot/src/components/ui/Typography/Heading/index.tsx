"use client"
import {createElement, FC, PropsWithChildren} from "react";
import {classNames} from "@/utils/classNames";

interface HeadingProps extends PropsWithChildren{
    type:string
    className?: string
}
interface HeadingClasses {
    [key: string]: string;
}
// todo: update styles
const headingClasses:HeadingClasses = {
    h1: "text-5xl font-semibold text-white",
    h2: "text-4xl font-semibold text-white",
    h3: "text-xl font-semibold text-white",
    h4: "text-lg font-semibold text-white",
    h5: "text-md font-semibold text-white",
    h6: "text-md font-semibold text-white",
};

export const Heading:FC<HeadingProps> = ({children,type, className,...props} ) => {
    const elementType = type.toLowerCase();
    const size = headingClasses[elementType] || "font-semibold text-white";

    return createElement(
        elementType,
        { className: classNames( size, className ??  ""), ...props },
        children
    );
}