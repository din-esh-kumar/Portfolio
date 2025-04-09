import React from 'react'

function Skills() {
  return (
    <section className='border-t-2'>
        <h1 className='text-white hover:scale-110 transition duration-300 text-3xl font-extrabold text-center px-6 hover:text-red-500 m-[10px] sm:m-[25px]'>SKILLS</h1>
        <div className='skillset grid grid-cols-1 sm:grid-cols-2 pb-10 md:pb-30 bg-black max-h-full justify-items-center place-content-center gap-4 md:gap-10'>
            <div className='flex flex-wrap md:w-2xl flex-col border-2 rounded-2xl md:rounded-4xl items-center border-red-500 transition md:hover:shadow-[0_0_25px_15px_rgba(255,0,0,0.8)] hover:shadow-[0_0_15px_8px_rgba(255,0,0,0.8)] cursor-pointer'>
                <h1 className='text-xl sm:text-4xl items-center pt-1 pb-1.5 md:pt-5 md:pb-5 text-red-500'>Programming Languages & Frameworks</h1>
                <h2 className='text-sm sm:text-2xl text-white'>Javascript(ReactJS, ExpressJS & ElectronJS)</h2>
                <h2 className='text-sm sm:text-2xl text-white'>CSS(Tailwind CSS)</h2>
                <h2 className='text-sm sm:text-2xl text-white'>Python</h2>
                <h2 className='text-sm sm:text-2xl text-white'>HTML</h2>  
            </div>
            <div className='flex flex-wrap flex-col md:w-2xl text-transparent border-2 items-center rounded-2xl md:rounded-4xl border-red-500 md:hover:shadow-[0_0_25px_15px_rgba(255,0,0,0.8)] hover:shadow-[0_0_15px_8px_rgba(255,0,0,0.8)] cursor-pointer'>
              <h1 className='text-xl sm:text-4xl pt-1 pb-1.5 md:pt-5 md:pb-5 text-red-500'>Frontend Development</h1>
              <h2 className='text-sm sm:text-2xl text-white'>Javascript(ReactJS & ElectronJS)</h2>
              <h2 className='text-sm sm:text-2xl text-white'>CSS(Tailwind CSS)</h2>
              <h2 className='text-sm sm:text-2xl text-white'>HTML</h2>
              <h2 className='text-sm sm:text-2xl text-white'>Vite</h2>
            </div>
            <div className='flex flex-wrap flex-col border-2 md:w-2xl items-center rounded-2xl md:rounded-4xl border-red-500 md:hover:shadow-[0_0_25px_15px_rgba(255,0,0,0.8)] hover:shadow-[0_0_15px_8px_rgba(255,0,0,0.8)] cursor-pointer hover:text-black'>
              <h1 className='text-xl sm:text-4xl pt-1 pb-1.5 md:pt-5 md:pb-5 text-red-500'>Backend Development</h1>
              <h2 className='text-sm sm:text-2xl text-white'>Javascript(ExpressJS & NodeJS)</h2>
              <h2 className='text-sm sm:text-2xl text-white'>Mongo DB</h2>
              <h2 className='text-sm sm:text-2xl text-white'>Python(NLP)</h2>
            </div>
            <div className='flex flex-wrap flex-col border-2 md:w-2xl items-center rounded-2xl md:rounded-4xl border-red-500 hover:text-black md:hover:shadow-[0_0_25px_15px_rgba(255,0,0,0.8)] hover:shadow-[0_0_15px_8px_rgba(255,0,0,0.8)] cursor-pointer'>
              <h1 className='text-xl sm:text-4xl pt-1 pb-1.5 md:pt-5 md:pb-5 text-red-500'>Tools</h1>
              <h2 className='text-sm sm:text-2xl text-white'>Git</h2>
              <h2 className='text-sm sm:text-2xl text-white'>GitHub</h2>
              <h2 className='text-sm sm:text-2xl text-white'>VS Code</h2>
              <h2 className='text-sm sm:text-2xl text-white'>PyCharm Community</h2>
            </div>
        </div>
    </section>
  )
}

export default Skills
//min-h-screen px-6