import React from 'react'
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible, AiFillApple, AiFillTwitterSquare, AiFillFacebook, AiOutlineGoogle } from "react-icons/ai";
import Button from './Button';

const Reg = () => {
    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    return (
        <div>
            <div className='bg-white px-10 py-7 rounded-[32px] text-[#445100]'>
                <h1 className='font-bold text-3xl  text-center mb-10'>Регистрация</h1>
                <div>
                    <p className='font-semibold'>E-mail</p>
                    <input type="email" placeholder='Введите e-mail' className='border border-[#445100] rounded-sm py-[1px] px-1 md:w-[350px] sm:w-[200px] mb-6 placeholder:text-[#445100] focus:outline-none' />
                </div>
                <div>
                    <p className='font-semibold'>Пароль</p>
                    <span className='flex items-center mb-5'>
                        <input type='password' placeholder='Введите пароль' className='border border-[#445100] rounded-sm py-[1px] px-1 placeholder:text-[#445100] focus:outline-none md:w-[350px] sm:w-[200px]' />
                        {/* <button className="" onClick={togglePassword}>
                            {passwordType === "password" ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}
                        </button> */}
                    </span>
                </div>
                <div>
                    <p className='font-semibold'>Повторите пароль</p>
                    <span className='flex items-center mb-5'>
                        <input type='password' placeholder='Введите пароль' className='border border-[#445100] rounded-sm py-[1px] px-1 placeholder:text-[#445100] focus:outline-none md:w-[350px] sm:w-[200px]' />
                        {/* <button className="" onClick={togglePassword}>
                            {passwordType === "password" ? <AiFillEyeInvisible size={25} /> : <AiFillEye size={25} />}
                        </button> */}
                    </span>
                </div>
                <Button>Войти</Button>
                <p className='font-normal text-center mt-5 text-sm'>Вход через социальные сети</p>
                <ul className='flex justify-center gap-3 mt-3'>
                    <li><a href="#"><AiFillApple size={50} /></a></li>
                    <li><a href="#"><AiFillTwitterSquare size={50} /></a></li>
                    <li><a href="#"><AiFillFacebook size={50} /></a></li>
                    <li><a href="#"><AiOutlineGoogle size={50} /></a></li>
                </ul>
            </div>
            <div className='text-[#445100] text-center mt-3'>
                <p className='text-sm'><a href="#">Уже имеется аккаунт?</a></p>
                <button className='bg-white w-[250px] rounded-sm border border-[#445100] text-sm font-semibold py-1 mt-3 hover:bg-[#445100] hover:text-white'>Войти</button>
            </div>
        </div>
    )
}

export default Reg