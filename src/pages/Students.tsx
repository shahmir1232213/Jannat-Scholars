import React from 'react'
import FullScreenProfile from '../components/FullScreenProfile'
import TableActionsBar from '../components/TableActionsBar'
import Table from '../components/Table'

const students = () => {
  const [studentBoard,setStudentBoard] = React.useState <boolean>(false)
  return (
    <div className='flex'>
      <TableActionsBar character={'Student'} bgColor={'#509cdb'}  textColor={'#ffffff'}/>
      <Table />
      {studentBoard && (<FullScreenProfile />)}
      
    </div>
  )
}

export default students