import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const Banner = () => {

  const navigate=useNavigate(); 

  return (
    <div className='flex flex-col md:flex-row bg-[#5f6FFF] rounded-lg px-6 md:px-10 md:h-[62vh] mb-3'>
      {/* Left Section */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-8 py-16'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight'>
          <span>Book Appointment</span><br />
          <span className='text-2xl md:text-3xl lg:text-4xl'>With 100+ Trusted Doctors</span>
        </p>

        <button onClick={()=>{navigate('/login');scrollTo(0,0)}} className='bg-white text-gray-700 text-sm font-medium px-6 py-3 rounded-full hover:scale-105 transition-all duration-300'>
          Create Account
        </button>
      </div>

      {/* Right Section */}
      <div className=' md:w-1/2 relative flex items-end justify-center mt-10 md:mt-0'>
        <img
          className='w-full md:absolute bottom-0 h-auto md:h-130 sm:h-80 rounded-lg'
          src={assets.banner_img}
          alt="Doctors Banner"
        />
      </div>
    </div>
  );
};

export default Banner;
