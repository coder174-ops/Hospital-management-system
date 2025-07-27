import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { AdminContext } from '../context/AdminContext';
import {useNavigate} from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext';

const Navbar = () => {
    const { aToken,setAToken } = useContext(AdminContext);
    const {dToken,setDToken} = useContext(DoctorContext)

    const navigate=useNavigate()

    const logout=()=>{
        navigate('/')
        aToken && setAToken('')
        aToken && localStorage.removeItem('aToken')
        dToken && setDToken('')
        dToken && localStorage.removeItem('dToken')
    }

    return (
        <div className="w-full shadow-md bg-white px-4 py-1 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <img
                    src={assets.admin_logo}
                    alt="Admin Logo"
                    className="h-10 w-10 sm:h-12 sm:w-12 object-contain cursor-pointer"
                />
                <p className="border px-2.5 py-0.5 rounded-full font-semibold border-gray-500 text-gray-600 text-sm">
                    {aToken ? 'Admin' : 'Doctor'}
                </p>
            </div>
            <button onClick={logout} className="bg-[#5F6FFF] hover:bg-[#4e54d8] text-white px-4 py-1 rounded-md text-sm transition">
                Logout
            </button>
        </div>
    );
};

export default Navbar;
