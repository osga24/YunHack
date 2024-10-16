import React from 'react';

export default function Class() {
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
      <div className='relative'>
        {/* 上方方塊 */}
        <div className='w-40 h-40 bg-gray-300 flex items-center justify-end pr-4 relative'>
          <p className='text-gray-600 text-2xl font-bold text-right'>
            社課
          </p>
          <div className='absolute top-0 right-0 h-full w-2 bg-gradient-to-t from-[#cdffd8] to-[#94b9ff]'></div>
        </div>

        {/* 中間的文本內容，保持高度但水平方向居中 */}
        <div className='absolute w-full top-1/2 transform -translate-y-1/2 flex justify-center'>
          <p className='text-gray-600 text-2xl text-center'>
            透過教學方式，讓你一步步了解漏洞背後的原理，以及電影裡面看到駭客用的工具<br />
          </p>
        </div>
      </div>

      {/* 下面的方塊 */}
      <div className="relative w-full h-screen flex justify-end">
        {/* 下面的文本內容，對齊 "讀書會" 方塊 */}
        <div className='absolute top-1/2 transform -translate-y-1/2 right-[12rem]'>
          <p className='text-gray-600 text-2xl text-right'>
            藉由讀書會，互相交流彼此的技術，一起茁壯成長！<br />
          </p>
        </div>

        {/* "讀書會" 方塊 */}
        <div className="relative w-40 h-40 bg-gray-300 flex items-center justify-start pl-4">
          <p className='text-gray-600 text-2xl font-bold text-left'>
            讀書會
          </p>
          <div className='absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#cdffd8] to-[#94b9ff]'></div>
        </div>
      </div>
    </div>
  );
}
