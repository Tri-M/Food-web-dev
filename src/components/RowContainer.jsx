import React from 'react'
import f6 from "../img/f6.png";
import {MdShoppingBasket} from "react-icons/md";
import {motion} from "framer-motion";
const RowContainer = ({flag}) => {
  return (
    <div className={`w-full my-12 bg-cardOverlay ${flag ? 'overflow-x-scroll':'overflow-x-hidden'}`}>
    <div className="w-300 md:w-340 h-auto bg-gray-100 rounded-lg p-2 my-12  backdrop-blur-lg hover:drop-shadow-2xl">
    <div className="w-full flex items-center justify-between">
        <motion.img whileHover={{scale:1.2}} src={f6} alt="" className='w-40 -mt-8 drop-shadow-xl'/>
        <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-lg'>
        <MdShoppingBasket className='text-white'/>
        </motion.div>
    </div>

    <div className="w-full flex flex-col  items-end justify-end">
    <p className='text-textColor font-semibold text-base md:text-lg'>Something</p>
    <p className='mt-2 text-sm text-gray-600'>50 calories</p>
    <div className='flex items-center gap-8'>
        <p className='text-lg text-textColor font-semibold'>
            <span className='text-sm text-blue-500'>$</span>5.25</p>
    </div>
    </div>
    </div>
    </div>
  );
};

export default RowContainer;