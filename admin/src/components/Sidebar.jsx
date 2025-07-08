import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';

const Sidebar = () => {
    const { aToken } = useContext(AdminContext);

    const linkClasses = ({ isActive }) =>
        `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer 
         ${isActive ? 'bg-[#F2F3FF] border-r-4 border-[#5F6FFF] font-semibold' : 'hover:bg-gray-50 transition'}`;

    return (
        <div className="min-h-screen bg-white border-r shadow-sm">
            {aToken && (
                <ul className="text-[#515151] mt-5 space-y-1">
                    <NavLink to={'/admin-dashboard'} className={linkClasses}>
                        <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
                        <p>Dashboard</p>
                    </NavLink>

                    <NavLink to={'/all-appointments'} className={linkClasses}>
                        <img src={assets.appointment_icon} alt="Appointments" className="w-5 h-5" />
                        <p>Appointments</p>
                    </NavLink>

                    <NavLink to={'/add-doctors'} className={linkClasses}>
                        <img src={assets.add_icon} alt="Add Doctor" className="w-5 h-5" />
                        <p>Add Doctor</p>
                    </NavLink>

                    <NavLink to={'/doctor-list'} className={linkClasses}>
                        <img src={assets.people_icon} alt="Doctors List" className="w-5 h-5" />
                        <p>Doctors List</p>
                    </NavLink>
                </ul>
            )}
        </div>
    );
};

export default Sidebar;
