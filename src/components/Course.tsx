import React from 'react';

export default function Class() {
  return (
    <div id='course' className='w-full h-screen flex flex-col'>
      <div className='relative'>

        {/* 上方方塊 */}
        <div className='flex justify-between'>
          <div className='w-40 h-40 bg-gray-300 flex items-center justify-end pr-4 relative'>
            <p className='text-gray-600 text-2xl font-bold text-right'>
              社課
            </p>
            <div className='absolute top-0 right-0 h-full w-2 bg-gradient-to-t from-[#cdffd8] to-[#94b9ff]'></div>
          </div>

          {/* 中間的文本內容，保持高度但水平方向居中 */}
          <p className='text-gray-600 px-5 text-xl md:text-2xl text-center m-auto'>
            <b>每兩週一次社課！</b><br/>透過教學方式，讓你一步步了解漏洞背後的原理，以及電影裡面看到駭客用的工具
          </p>
        </div>
      </div>

      {/* 下面的方塊 */}
      <div className="flex justify-between mt-24">
        {/* 下面的文本內容，對齊 "讀書會" 方塊 */}
        <p className='text-gray-600 px-5 text-xl md:text-2xl text-center m-auto'>
          <b>每個月一次！</b><br/>藉由讀書會，互相交流彼此的技術，一起茁壯成長！
        </p>

        {/* "讀書會" 方塊 */}
        <div className="relative w-40 h-40 bg-gray-300 flex items-center justify-start pl-4">
          <p className='text-gray-600 text-2xl font-bold text-left'>
            讀書會
          </p>
          <div className='absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#cdffd8] to-[#94b9ff]'></div>
        </div>
      </div>

      {/* 最後的社課方塊 */}
      <div className='flex justify-between mt-24'>
        <div className='w-40 h-40 bg-gray-300 flex items-center justify-end pr-4 relative'>
          <p className='text-gray-600 text-2xl font-bold text-right'>
            集訓營
          </p>
          <div className='absolute top-0 right-0 h-full w-2 bg-gradient-to-t from-[#cdffd8] to-[#94b9ff]'></div>
        </div>

        {/* 中間的文本內容，保持高度但水平方向居中 */}
        <p className='text-gray-600 px-5 text-xl md:text-2xl text-center m-auto'>
          <b>每個月一次！</b><br/>第一次接觸 CTF 嗎？不知道該怎麼下手嗎？想要跟朋友一起討論嗎？<br/>
          由幹部介紹入門個 CTF 平台、題目，與朋友們一起討論，了解題目，從中學習！
        </p>
      </div>

      <div className="flex justify-end mt-24">
        <p className='text-gray-600 px-5 text-xl md:text-2xl text-center m-auto'>
          <b>每學期末！</b><br/>校內 CTF ，透過 CTF 競賽檢驗這學期的成果！
        </p>

        <div className="relative w-40 h-40 bg-gray-300 flex items-center justify-start pl-4">
          <p className='text-gray-600 text-2xl font-bold text-left'>
            CTF 競賽
          </p>
          <div className='absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#cdffd8] to-[#94b9ff]'></div>
        </div>
      </div>

      {/* 增加底部間距，避免與 Members 重疊 */}
      <div className='mt-24'></div>
    </div>
  );
}
