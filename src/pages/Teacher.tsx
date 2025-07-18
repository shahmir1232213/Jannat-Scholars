import React from 'react'
import FullScreenProfile from '../components/FullScreenProfile'
import TableActionsBar from '../components/TableActionsBar'
import Table from '../components/Table'

const Teacher = () => {
  const [teacherBoard,setTeacherBoard] = React.useState <boolean>(true)
  return (
      <div className='flex'>
      <TableActionsBar character={'Teacher'} />
        <Table />
      {teacherBoard && (<FullScreenProfile />)}
    </div>
  )
}

export default Teacher