import { motion } from 'framer-motion';
import { smoothScrollTo } from '@/utils/smoothScroll';
const NavBar = () => {
  const variants = {
    hidden: { y: -100, opacity: 0 }, // 初始狀態
    visible: { y: 0, opacity: 1 },   // 最終狀態
  };

const about_handleClick = (event: React.MouseEvent) => {
	event.preventDefault();
	smoothScrollTo('#about', 1500); // 可以更改滾動到的目標和時間
  };

const course_handleClick = (event: React.MouseEvent) => {
	event.preventDefault();
	smoothScrollTo('#course', 1500); // 可以更改滾動到的目標和時間
  };

return (
    <motion.div
      initial="hidden"  // 初始狀態
      animate="visible"  // 開始動畫
      transition={{ duration: 1 }} // 動畫持續時間
      variants={variants} // 設置變量
      className="fixed top-4 right-0 bg-white rounded-xl shadow-xl px-10 py-5 w-auto"
    >
      <nav className="flex items-center space-x-6 text-lg font-bold">
        <a onClick={about_handleClick} href="#about" className="text-gray-800 hover:text-[#94b9ff]">About</a>
        <a onClick={course_handleClick} href="#course" className="text-gray-800 hover:text-[#94b9ff]">Course </a>
        <a href="#" className="text-gray-800 hover:text-[#94b9ff]">Members</a>
        <a href="#" className="text-gray-800 hover:text-blue-500">Contact</a>
        <button className="bg-[#5567E3] hover:bg-[#6F86D4] text-white font-bold py-2 px-4 rounded hidden md:block">
          <a href="">Join Discord</a>
        </button>
      </nav>
    </motion.div>
  );
};

export default NavBar;
