import React from 'react'
import FullScreenProfile from '../components/FullScreenProfile'
import TableActionsBar from '../components/TableActionsBar'
import Table from '../components/Table'

const students = () => {
  const [studentBoard,setStudentBoard] = React.useState <boolean>(true)
  return (
    <div className='flex'>
      <TableActionsBar character={'Student'} />
      <Table />
      {studentBoard && (<FullScreenProfile />)}
      
    </div>
  )
}

export default students