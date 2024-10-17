import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-12 right-8 z-50"> {/* 放在右上角 */}
      <button onClick={toggleMenu} className="focus:outline-none">
        {/* 漢堡圖標 */}
        <div
          className={`h-1 w-8 bg-white mb-1 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          style={{ transformOrigin: 'center' }} // 設定旋轉中心
        />
        <div
          className={`h-1 w-8 bg-white mb-1 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
          style={{ transformOrigin: 'center' }} // 設定旋轉中心
        />
        <div
          className={`h-1 w-8 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          style={{ transformOrigin: 'center' }} // 設定旋轉中心
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
          <nav className="flex flex-col p-4">
            <a href="#" className="block text-gray-800 hover:text-blue-500">About</a>
            <a href="#course" className="block text-gray-800 hover:text-blue-500">Course</a>
            <a href="#about" className="block text-gray-800 hover:text-blue-500">Members</a>
            <a href="#" className="block text-gray-800 hover:text-blue-500">Contact</a>
            <button className="bg-[#5567E3] hover:bg-[#6F86D4] text-white font-bold py-2 px-4 rounded mt-2">
              <a href="">Join Discord</a>
            </button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
