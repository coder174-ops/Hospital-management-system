import { useContext, useEffect, useState } from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import {AppContext} from '../context/AppContext'

const Doctors = () => {

  const {speciality}=useParams();
  const {doctors}=useContext(AppContext);
  const navigate=useNavigate();

  const [filterDoc, setFilterDoc] = useState([])

  const applyFilter = () => {
    if(speciality){
      setFilterDoc(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()));
    }else{
      setFilterDoc(doctors);
    }
  }

  useEffect(() => {
    applyFilter();
  }, [speciality, doctors])
  

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist.</p>
      <div className='flex flex-col sm:flex-row items-start gap-4 mt-4'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p onClick={()=> speciality==='General_physician' ? navigate('/doctors') : navigate('/doctors/General_physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointe hover:border-indigo-400 ${speciality==='General_physician' ? 'bg-indigo-400 text-black' : ''}`}>General physician</p> 

          <p onClick={()=> speciality==='Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-indigo-400 ${speciality==='Gynecologist' ? 'bg-indigo-400 text-black' : ''}`}>Gynecologist</p>

          <p onClick={()=> speciality==='Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-indigo-400 ${speciality==='Dermatologist' ? 'bg-indigo-400 text-black' : ''}`}>Dermatologist</p>

          <p onClick={()=> speciality==='Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-indigo-400 ${speciality==='Pediatricians' ? 'bg-indigo-400 text-black' : ''}`}>Pediatricians</p>

          <p onClick={()=> speciality==='Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-indigo-400 ${speciality==='Neurologist' ? 'bg-indigo-400 text-black' : ''}`}>Neurologist</p>

          <p onClick={()=> speciality==='Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer hover:border-indigo-400 ${speciality==='Gastroenterologist' ? 'bg-indigo-400 text-black' : ''}`}>Gastroenterologist</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4'>
        {
           filterDoc.map((item, index) => (
          <div onClick={()=>navigate(`/appointment/${item._id}`)}
            key={index}
            className='border border-blue-200 rounded-xl overflow-hidden shadow-sm bg-white cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg'
          >
            <img className='bg-blue-50 w-full h-80 object-cover' src={item.image} alt={item.name} />
            <div className='p-4'>
              <div className='flex items-center gap-2 text-sm text-green-500 mb-1'>
                <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                <span>Available</span>
              </div>
              <p className='font-medium text-base'>{item.name}</p>
              <p className='text-sm text-gray-500'>{item.speciality}</p>
            </div>
          </div>
        ))
        }
        </div>
      </div>
    </div>
  )
}

export default Doctors