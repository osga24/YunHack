import React from 'react'
import useTextAnimation from '@/utils/TextAnimation'

export default function Contact() {
  const titleText = "Contact US !";
  const titleRef = useTextAnimation(titleText);

  return (
    <div id='contact' className='flex items-center justify-center h-screen flex-col'>
      <div ref={titleRef} className='text-4xl font-bold mb-10'>
        {titleText}
      </div>

      {/* IG and Mail Section (小於md時改為直列排列，md及以上時水平排列) */}
      <div className='flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10'>
        {/* IG Section */}
        <div className='flex flex-row items-center space-x-4 transform transition-transform duration-300 hover:scale-110'>
          {/* IG Photo */}
          <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'>
            <a href='https://www.instagram.com/nyust_hacking/'>
              <img
                className='w-full h-full rounded-lg object-cover'
                src='/images/ig_icon.png'
                alt='IG Profile'
              />
            </a>
          </div>

          {/* IG Account Name */}
          <div className='text-xl font-semibold md:text-lg'>
            <p>Follow us on IG:</p>
            <a href='https://www.instagram.com/nyust_hacking/' className='text-blue-500'>@nyust_hacking</a>
          </div>
        </div>

        {/* Mail Section */}
        <div className='flex flex-row items-center space-x-4 transform transition-transform duration-300 hover:scale-110'>
          {/* Mail Icon */}
          <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'>
            <img
              className='w-full h-full rounded-lg object-cover'
              src='/images/mail_icon.png'
              alt='Mail Icon'
            />
          </div>

          {/* Email Address */}
          <div className='text-xl font-semibold md:text-lg'>
            <p>Contact us via Email:</p>
            <a href='mailto:yunhack@啥.tw' className='text-blue-500'>nyust.hacking@gmail.com</a>
          </div>
        </div>

        {/* Discord Section */}
        <div className='flex flex-row items-center space-x-4 transform transition-transform duration-300 hover:scale-110'>
          {/* Discord Icon */}
          <div className='w-[60px] h-[60px] md:w-[80px] md:h-[80px]'>
            <a href='https://discord.gg/vxgqgpSmBj'>
              <img
                className='w-full h-full rounded-lg object-cover'
                src='/images/discord_icon.png'
                alt='Discord Icon'
              />
            </a>
          </div>

          {/* Discord Address */}
          <div className='text-xl font-semibold md:text-lg'>
            <p>Join Us Discord:</p>
            <a href='https://discord.gg/vxgqgpSmBj' className='text-blue-500'>雲科資安社</a>
          </div>
        </div>
      </div>
    </div>
  )
}
