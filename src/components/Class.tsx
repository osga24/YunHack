import React from 'react';

export default function Class() {
  return (
    <div className='w-full h-screen flex flex-col justify-center'>
      <div className='relative'>
        {/* 上方方塊 */}
        <div className='w-40 h-60 bg-gray-300 flex items-center justify-end pr-4 relative'>
          <p className='text-gray-600 text-2xl font-bold text-right'>
            Liunx 操作
          </p>
          <div className='absolute top-0 right-0 h-full w-2 bg-gradient-to-t from-[#cdffd8] to-[#94b9ff]'></div>
        </div>

        {/* 下面的文本內容 */}
        <div className='px-10 absolute left-[10rem] top-1/2 transform -translate-y-1/2'>
          <p className='text-gray-600 text-2xl'>
            吧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧唧吧唧<br />
            吧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧吧唧唧吧唧<br />
          </p>
        </div>
      </div>

      {/* 下面的方塊 */}
      <div className="relative w-full h-screen flex justify-end">
        <div className="relative w-40 h-60 bg-gray-300 flex items-center justify-start pl-4">
			<p className='text-gray-600 text-2xl font-bold text-left'>
				網頁安全
			</p>
          <div className='absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-[#cdffd8] to-[#94b9ff]'></div>
        </div>
      </div>
    </div>
  );
}
