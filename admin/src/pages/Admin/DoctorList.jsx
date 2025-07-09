import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorList = () => {

  const {doctors,aToken, getAllDoctors}=useContext(AdminContext)

  useEffect(() => {
    if(aToken){
      getAllDoctors()
    }
  }, [aToken])
  
  return (
    <div>
     
    </div>
  )
}

export default DoctorList