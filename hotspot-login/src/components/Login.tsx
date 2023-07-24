import loginImg from '../assets/75one.jpg'
import backgroundImage from '../assets/UI_golden.jpg'; 
import {TbWorldWww} from "react-icons/tb"
import {BiLogoGmail} from "react-icons/bi";
import {FaGraduationCap} from "react-icons/fa"
import {HiOutlineUserGroup} from "react-icons/hi"
import {FaRegQuestionCircle} from "react-icons/fa"

export default function Login() {
  return (
    <div className='h-screen bg-cover bg-no-repeat grid grid-cols-1 sm:grid-cols-2 h-screen w-full' 
    style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='hidden sm:block'>
            <img className='p-10 h-[550px] w-full object-cover' src={loginImg} alt="" /> 
        </div>

        <div className='flex flex-col justify-center'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-100 rounded-3xl p-4'>
                <h2 className='text-5xl font-italic text-center py-6'>Hotspot Login</h2>
                <div className='flex flex-col py-2'>
                    <label>Username</label>
                    <input className='border p-2 mt-2 rounded-3xl' type="text" />
                </div>
                <div className='flex flex-col py-2'>
                    <label>Password</label>
                    <input className='border p-2 mt-2 rounded-3xl' type="password" />
                </div>
                <div className='flex justify-center'>
                <button className='border rounded-3xl w-60 justify-center my-5 py-2 bg-green-600 hover:bg-green-800'>Login</button>
                </div>
                <div className='flex justify-center'>
                    <a href="#" className='flex m-3 p-2 text-gray-600 border-2 rounded-3xl border-gray-600 hover:bg-orange-200'>
                        <TbWorldWww size="25px"/>
                    </a>
                    <a href="#" className='flex m-3 p-2 text-gray-600 border-2 rounded-3xl border-gray-600 hover:bg-orange-200'>
                        <BiLogoGmail size="25px"/>
                    </a>
                    <a href="#" className='flex m-3 p-2 text-gray-600 border-2 rounded-3xl border-gray-600 hover:bg-orange-200'>
                        <FaGraduationCap size="25px"/>
                    </a>
                    <a href="#" className='flex m-3 p-2 text-gray-600 border-2 rounded-3xl border-gray-600 hover:bg-orange-200'>
                        <HiOutlineUserGroup size="25px"/>
                    </a>
                    <a href="#" className='flex m-3 p-2 text-gray-600 border-2 rounded-3xl border-gray-600 hover:bg-orange-200'>
                        <FaRegQuestionCircle size="25px"/>
                    </a>
                </div>
            </form>
        </div>
    </div>
  )
}
