import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row bg-[#5f6FFF]  rounded-lg px-6 md:px-10 md:h-[70vh] mt-10'>
      {/* Left Section */}
      <div className='md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left gap-8 py-16'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight '>
         <span className='text-shadow-blue-600'>Welcome to Prescripto</span>  <br/> <span className='xl:flex xl:justify-center text-2xl md:text-3xl lg:text-4xl '>With trusted Doctors</span> 
        </p>
        
        <div className='flex flex-col md:flex-row items-center md:items-start gap-4 text-white text-sm font-light'>
          <img className='w-20' src={assets.header_pic3} alt="Doctor Icon" />
          <p>
            Simply browse through our extensive list of trusted doctors,
            <br className='hidden md:block' />
            schedule your appointment hassle-free.
          </p>
        </div>

        <a
          href="#speciality"
          className='flex items-center gap-2 bg-white text-gray-600 text-sm font-medium px-6 py-3 rounded-full hover:scale-105 transition-all duration-300'
        >
          Book Appointment
          <img className='w-3' src={assets.header_arrow} alt="Arrow" />
        </a>
      </div>

      {/* Right Section */}
      <div className='md:w-1/2 relative flex items-end justify-center mt-10 md:mt-0'>
        <img
          className='w-full md:absolute bottom-0 h-auto md:h-130 sm:h-80 rounded-lg'
          src={assets.header_group_pic1}
          alt="Group of Doctors"
        />
      </div>
    </div>
  );
};

export default Header;
