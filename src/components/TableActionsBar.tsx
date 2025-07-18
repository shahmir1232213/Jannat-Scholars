import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar'

interface Prop{
  character:string;
  bgColor:string;
  textColor:string
}

const TableActionsBar:React.FC<Prop> = ({character,bgColor,textColor}) => {
  return (
    <div className='flex items-end fixed border-2 border-green-950 w-[53.6rem] h-[13.6rem]'>
      <Button text={`Add ${character}`} bgColor={bgColor} textColor={textColor}/>
      <SearchBar character={character}/>
    </div>
  )
}

export default TableActionsBar