import React from 'react';

export default function About() {
  return (
    <div className='overflow-hidden'>
      <div className='bg-white w-full h-screen flex flex-col justify-center items-center pt-20' id='about'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4'>
          {/* 圖片部分 */}
          <div className='flex justify-center items-center'>
            <img className='rounded-xl w-[80%] h-auto' src='/images/LOGO.png' alt="/" />
          </div>
          {/* 文字部分 */}
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className='md:text-5xl sm:text-3xl text-2xl font-bold py-2'>關於我們！</h1>
            <div className='text-xl font-bold'>
              <p>雲科資安社是由 <span className='text-green-400'>黃宥睿、郭泓毅、蘇育愷</span></p>
              <p>在得知入學 <span className='text-[#469491]'>雲林科技大學</span> 就計劃一起創辦的學術性社團</p>
              <p>在這邊不用怕你完全沒接觸過，我們會從零基礎開始帶起</p>
              <p>讓你一步步與我們進入資安的世界！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
