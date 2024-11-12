import React from 'react'
import { FaLinkedin, FaMobileAlt } from 'react-icons/fa'
import { FaGithub, FaLocationArrow } from 'react-icons/fa6'

const FooterLinks=[
  {
    title:"Home",
    link:"/#"
  },
  {
    title:"About",
    link:"/#about"
  },
  {
    title:"Contact",
    link:"/#contact"
  },
  {
    title:"Blog",
    link:"/#blog"
  },
]
const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className='py-8 px-4'>
          <a
              href="#"
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl "
            >
              Eshop
            </a>
            <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>
              Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Placeat qui soluta
              eos deserunt ipsam?
            </p>
            <p className='text-gray-500 mt-4'>
              Made with ❤️ by Ipsita Aparajita Sahoo 
             </p>
             <a href="https://github.com/Ipsitaaparajitasahoo"
             target='_blank'
             className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>
              Visit our Github 
             </a>
          </div>
          {/* Footer links */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map(
                    (data,index)=>(
                      <li key={index}>
                         <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300 dark:text-gray-400'>
                          {data.title}
                         </a>
                      </li>
                    )
                  )
                }
              </ul>
            </div>

             {/* second col links */}
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map(
                    (data,index)=>(
                      <li key={index}>
                         <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300 dark:text-gray-400'>
                          {data.title}
                         </a>
                      </li>
                    )
                  )
                }
              </ul>
            </div>
              {/* company adress */}
              <div className='py-8 px-4 col-span-2 sm:col-auto'>
                <h1 className='text-xl font-bold sm:text-left mb-3'>Adress</h1>
                <div>
                  <div className="flex items-center gap-3 ">
                    <FaLocationArrow />
                    <p>Bangalore , Karnataka</p>
                    </div>
                    <div>
                    <div className="flex items-center gap-3 mt-6">
                    <FaMobileAlt/>
                    <p>+91 1234567890</p>
                  </div>

                  {/* social Links */}
                  <div className='flex items-center gap-3 mt-6'>
                    <a href="#">
                      <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                    </a>
                    <a href="#">
                      <FaGithub className='text-3xl hover:text-primary duration-300'/>
                    </a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer