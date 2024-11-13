import logo from '../assets/logo.png'
const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-2'>
            <img className='w-[350px]' src={logo} alt="" />
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
        </div>
    );
};

export default Header;