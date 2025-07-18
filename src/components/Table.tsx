import React from 'react';
import {students} from '../data/list'

const Table = () => {
  return (
    <div className='bg-white border-2 scrollbar-hide overflow-auto border-blue-800 h-[73.8vh] mt-[26vh] w-full'>

      {/* Header */}
      <div className='flex sticky top-0 z-10 bg-white text-black border-2 py-3 pr-[15rem] border-red-800 font-semibold'>
        <p className="w-1/4 text-center">Student ID</p>
        <p className="w-1/4 text-center">Name</p>
        <p className="w-1/4 text-center">Class</p>
        <p className="w-1/4 text-center">Gender</p>
      </div>

      {/* Row */}
      {
      students.map((student,index)=>{
        return(
              <div
                  className={`flex text-black border-2 py-3 pr-[15rem] hover:bg-[#509cdb] hover:text-white border-red-800 ${
                  index % 2 === 0 ? 'bg-[#f0f8ff]' : ''
                }`}
              >
                <p className="w-1/4 text-center ">{student.id}</p>
                <p className="w-1/4 text-center flex gap-3"><img className='border-2 items-center ml-[4rem] border-red-700 h-[2rem] w-[2rem]' />{student.name}</p>
                <p className="w-1/4 text-center">{student.class}</p>
                <p className="w-1/4 text-center">{student.gender}</p>
              </div>
        )})
      }
    </div>
  );
};

export default Table;
