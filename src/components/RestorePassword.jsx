import React from 'react'
import Button from './Button';

const RestorePassword = () => {
    return (
        <div className='bg-white px-10 py-7 rounded-[32px] text-[#445100]'>
            <h1 className='font-bold text-3xl  text-center mb-10'>Восстановить пароль</h1>
            <div>
                <p className='font-semibold'>E-mail</p>
                <input type="email" placeholder='Введите e-mail' className='border border-[#445100] rounded-sm py-[1px] px-1 md:w-[350px] sm:w-[200px] mb-6 placeholder:text-[#445100] focus:outline-none' />
            </div>
            <Button>Войти</Button>
        </div>
    )
}

export default RestorePassword