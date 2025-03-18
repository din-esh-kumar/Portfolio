import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaWhatsapp } from 'react-icons/fa'

const icons=[
  {
    href:"https://www.linkedin.com/in/dinesh-kumar-1b544b240",
    components: <FaLinkedin/>
  },
  {
    href:"https://github.com/din-esh-kumar",
    components: <FaGithub/>
  },
  {
    href:"#",
    components: <FaTwitter/>
  },
  {
    href:"https://wa.me/+918248722357",
    components: <FaWhatsapp/>,
  }
]
const SocialIcons = () => {
  return (
    <div className='flex justify-center md:justify-start space-x-4 mb-6 sm:mb-6'>
      {icons.map((icon, index) =>
      <a key={index} href={icon.href} className='w-10 h-10 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 hover:bg-red-500 hover:text-black transition hover:shadow-[0_0_15px_3px_rgba(255,0,0,0.8)]'>{icon.components}</a>)}
    </div>
  )
}

export default SocialIcons;