import React from 'react'

interface Props{
    text:string,
}

const Button:React.FC<Props> = ({text}) => {
  return (
    <div className='absolute pt-4 text-center left-[12rem] top-[2rem] border-2 border-pink-500 h-[4rem] w-[14rem]'>
        {text}
    </div>
  )
}

export default Button