"use client"
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import useTextAnimation from '@/utils/TextAnimation';
import About from '@/components/About';
import NavBar from '@/components/Bar/Navbar';
import Course from '@/components/Course';
import HamburgerMenu from '@/components/Bar/HambugerMenu';
import Footer from '@/components/Footer';
import Members from '@/components/Members';
import Contact from '@/components/Contact';
import { smoothScrollTo } from '@/utils/smoothScroll';
export default function Main() {
// title
const titleText = "YunHack";
const titleRef = useTextAnimation(titleText);

  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    // 當組件加載後，設置可見狀態為 true
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 延遲時間可以根據需要調整

    return () => clearTimeout(timer); // 清理計時器
  }, []);

  const handleClick = () => {
    controls.start({ y: [-20, 0, -20] });
    smoothScrollTo('#about');
  };


  return (
<div>
<div className="relative w-full h-screen flex items-center justify-center">
  <div className="w-[93%] h-[93%] bg-gradient-to-br from-[#cdffd8] to-[#94b9ff] rounded-xl z-10 flex flex-col items-center justify-center">

    {/* NavBar */}
	<div className='hidden md:block'>
		<NavBar/>
	</div>
	<div className='md:hidden'>
		<HamburgerMenu/>
	</div>
	{/* Hero */}
    <div className="flex flex-col items-center text-white font-bold">
      <h1 className={`text-6xl sm:text-6xl md:text-8xl font-extrabold transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        雲科資安社
      </h1>
      <p className={`flex flex-row justify-center text-4xl sm:text-5xl md:text-6xl transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} ref={titleRef}>
        {titleText}
      </p>
    </div>

    {/* 按鈕區域 */}
    <div className={`absolute bottom-10 left-0 right-0 flex justify-center transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
      <a href="#about" onClick={handleClick}>
        <motion.img
          src='images/down_arrow.svg'
          alt='arrow-down'
          className='w-[52px] h-[52px] object-contain'
          animate={{ y: [-20, 0, -20] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </a>
    </div>
  </div>
</div>

	<About/>
	<Course/>
	<Members/>
	<Contact/>
	<Footer/>

</div>

);
}
