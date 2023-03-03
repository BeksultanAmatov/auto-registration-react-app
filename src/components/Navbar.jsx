import React from 'react'
import { FaBell } from 'react-icons/fa'
import { BsChevronDown } from "react-icons/bs";

const Navbar = () => {
    return (
        // fixed left-0 right-0
        <div className='w-full '>
            <div className='bg-[#B70707] items-center justify-between py-5 md:px-[70px] px-10 md:flex'>
                <div className='font-bold text-5xl cursor-pointer text-white'>
                    <a href="/">ЛОГО</a>
                </div>
                <ul className='md:flex md:items-center'>
                    <li className='group text-xl text-white border rounded-full py-1 flex items-center justify-center cursor-pointer group-hover:text-[#B70707] hover:bg-white'>
                        <p className='text-white md:pl-7 group-hover:text-[#B70707]'>рецепты</p>
                        <span className='md:ml-4 md:pr-7 group-hover:text-[#B70707]'><BsChevronDown /></span>
                    </li>
                    <li className='md:ml-[100px] text-xl'>
                        <a className='text-white' href="#">меню</a>
                    </li>
                    <li className='md:ml-[100px] text-xl'>
                        <a className='text-white' href="#">о нас</a>
                    </li>
                    <li className='md:ml-[100px] group'>
                        <div className='bg-white w-[40px] h-[40px] rounded-full flex justify-center items-center z-[-1] group-hover:bg-[#B70707]'>
                            <a className='text-[#B70707] group-hover:text-white' href="#">
                                <FaBell size={25} />
                            </a>
                        </div>
                    </li>
                    <li className='md:ml-[70px]'>
                        <div className='flex flex-col text-center'>
                            <a href="/login">
                                <button className='bg-white text-[#B70707] rounded-full py-[2.5px] px-10 text-center text-xl hover:bg-[#B70707] hover:text-white'>
                                    Войти
                                </button>
                            </a>
                            <a className='text-white' href='/register'>Нет аккаунта ?</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar