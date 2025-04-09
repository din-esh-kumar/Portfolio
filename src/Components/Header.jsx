import React from 'react'

const navList=[
    {
        id : 1,
        data:"Home"
    },
    {
        id : 2,
        data:"Skills"
    },   {
        id : 3,
        data:"Education"
    },   
    {
        id : 4,
        data:"Experience"
    },
    {
        id : 5,
        data:"Projects"
    },
    {
        id : 6,
        data:"Contact"
    }
]
const Header = () => {
  return (
    <header className='fixed w-[1080px] md:w-full flex justify-between items-center px-6 p-4 z-50 bg-transparent'>
        <a href="#" className='text-3xl font-extrabold text-red-500 hover:scale-110 transition duration-300'>DINESH</a>
        <nav className='hidden md:flex'>
            {navList.map((item)=>(
                <a key={item.data} href="#" className='ml-8 text-lg font-medium text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500'>{item.data}</a>
                ))}
        </nav>
    </header>
  )
}

export default Header;