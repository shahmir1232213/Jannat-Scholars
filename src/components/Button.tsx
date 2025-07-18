import React from 'react'

interface Props{
    text:string;
    bgColor:string;
    textColor:string
}

const Button:React.FC<Props> = ({text,bgColor,textColor}) => {
  return (
<div
  className="rounded-lg font-bold absolute pt-4 text-center left-[12rem] top-[2rem] border-2 border-pink-500 h-[4rem] w-[12rem]"
  style={{ backgroundColor: bgColor, color: textColor }}
>
        {text}
    </div>
  )
}

export default Button