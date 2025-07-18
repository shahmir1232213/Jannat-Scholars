import React from 'react'

interface Prop{
  character:string
}

const SearchBar:React.FC<Prop> = ({character}) => {
  return (
    <div className='flex items-center ml-20 border-2 w-[100%]  h-[8vh] border-black'>
         <div className='border-2 w-32 h-[70%] border-blue-700 pl-3 pt-2'>Add Filter</div>
        <input className='border-2 h-[70%] border-red-700 w-[100%] pl-16 ' type='text' placeholder={`Search for a ${character} by ${character} ID`}/>
    </div>
  )
}

export default SearchBar