import React from 'react';

const CourseBlock = ({ title, description, isRight }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between my-8 ${isRight ? 'md:flex-row-reverse' : ''}`}>
    <div className={`w-full md:w-40 h-40 bg-gray-300 flex items-center justify-center relative mb-4 md:mb-0 ${isRight ? 'md:ml-4' : 'md:mr-4'}`}>
      <p className='text-gray-600 text-2xl font-bold text-center'>{title}</p>
      <div className={`absolute top-0 ${isRight ? 'left-0' : 'right-0'} h-full w-2 bg-gradient-to-t from-[#cdffd8] to-[#94b9ff]`}></div>
    </div>
    <p className='text-gray-600 px-5 text-xl md:text-2xl text-center md:text-left flex-1'>
      {description}
    </p>
  </div>
);

export default function Class() {
  return (
	<section id='course' className='w-full py-16 bg-white'>
		  <div className='container mx-auto px-4'>
			<h2 className="text-3xl font-bold text-center mb-12">課程安排</h2>

			<CourseBlock
			  title="社課"
			  description={<><b>每兩週一次社課！</b><br/>透過教學方式，讓你一步步了解漏洞背後的原理，以及電影裡面看到駭客用的工具</>}
			  isRight={false}
			/>

			<CourseBlock
			  title="讀書會"
			  description={<><b>每個月一次！</b><br/>藉由讀書會，互相交流彼此的技術，一起茁壯成長！</>}
			  isRight={true}
			/>

			<CourseBlock
			  title="集訓營"
			  description={<><b>每個月一次！</b><br/>第一次接觸 CTF 嗎？不知道該怎麼下手嗎？想要跟朋友一起討論嗎？<br/>由幹部介紹入門各 CTF 平台、題目，與朋友們一起討論，了解題目，從中學習！</>}
			  isRight={false}
			/>

			<CourseBlock
			  title="CTF 競賽"
			  description={<><b>每學期末！</b><br/>校內 CTF ，透過 CTF 競賽檢驗這學期的成果！</>}
			  isRight={true}
			/>
		  </div>
    </section> );
}
