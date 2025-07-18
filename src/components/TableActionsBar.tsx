import React from 'react'
import Button from './Button'
import SearchBar from './SearchBar'

interface Prop{
  character:string
}

const TableActionsBar:React.FC<Prop> = ({character}) => {
  return (
    <div className='flex items-end fixed border-2 border-green-950 w-[53.6rem] h-[13.6rem]'>
      <Button text={`Add ${character}`}/>
      <SearchBar character={character}/>
    </div>
  )
}

export default TableActionsBar