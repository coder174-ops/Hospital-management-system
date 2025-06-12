import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate=useNavigate();
  const [dropMenu, setDropMenu] = useState(false);
  const [token, setToken] = useState(true);

  return (
    <div className='flex items-center justify-between px-4 py-4 border-b border-gray-300 relative'>
      {/* Logo + Title */}
      <div className='flex items-center gap-2 cursor-pointer'>
        <img className='w-10 h-10' src={assets.logo} alt="Logo" />
        <h2 className='text-2xl sm:text-sm md:text-xl font-bold text-[#5f6FFF]'>Prescripto</h2>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex items-center gap-6 md:gap-5  font-medium sm:gap-3'>
        {['/', '/doctors', '/about', '/contact'].map((path, index) => (
          <NavLink key={index} to={path}>
            <li className='hover:text-[#5f6FFF] duration-200'>
              {['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'][index]}
            </li>
          </NavLink>
        ))}
      </ul>

      {/* Create Account Button */}
      <div className='hidden md:block'>
        {
          token?
          <div className='flex items-center gap-1 group relative cursor-pointer'>
             <img className='w-9 rounded-full' src={assets.profile_pic} alt="" />
             <img className='w-3 ' src={assets.dropdown_icon} alt="" />
             <div className='absolute top-0 right-0 pt-14 font-medium text-base text-gray-600 hidden z-20 group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col p-4 gap-2'>
                <p onClick={()=>navigate('./my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={()=>navigate('./my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
             </div>
          </div>
          :<button onClick={()=>navigate('./login')}  className='bg-[#5f6FFF] text-white px-5 py-2 rounded-full font-bold text-base md:px-2 md:py-1'>
          Create account
        </button>
        }
      </div>

      {/* Hamburger Menu Button */}
      <div className='md:hidden z-20' onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className='w-7 h-7 text-[#5f6FFF] cursor-pointer'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
          />
        </svg>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full right-0 w-[60%] bg-white shadow-md z-10 md:hidden'>
          <ul className='flex flex-col gap-4 p-4 font-medium'>
            {['/', '/doctors', '/about', '/contact'].map((path, index) => (
              <NavLink
                key={index}
                to={path}
                onClick={() => setMenuOpen(false)}
                className='hover:text-[#5f6FFF] duration-200'
              >
                <li>{['HOME', 'ALL DOCTORS', 'ABOUT', 'CONTACT'][index]}</li>
              </NavLink>
            ))}
            <button  onClick={()=>navigate('./login')} className='bg-[#5f6FFF] text-white px-4 py-2 rounded-full font-bold'>
              Create account
            </button>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
