import React from 'react'
import { useContext } from 'react';
import { DoctorContext } from '../../context/DoctorContext';
import { useEffect } from 'react';

const DoctorAppointments = () => {

  const {dToken,appointments,getAppointments}=useContext(DoctorContext);

  useEffect(() => {
    if(dToken){
    getAppointments();
    }
  }, [dToken]);

  return (
    <div>
      <p>All Appointments</p>
      <div>
        <div>
          <p>#</p>
          <p>Patient</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default DoctorAppointments