import React from 'react'

const Button = (props) => {
  return (
    <button className='w-[350px] bg-[#445100] py-1 px-10 rounded-sm text-white font-bold'>{props.children}</button>
  )
}

export default Button