import React,{useState,useEffect,useRef} from 'react';
import f6 from "../img/f6.png";
import {MdShoppingBasket} from "react-icons/md";
import {motion} from "framer-motion";
const RowContainer = ({flag,data,scrollValue}) => {
    //console.log(data);
    const RowContainer= useRef();
    useEffect(() => {
        RowContainer.current.scrollLeft+=scrollValue;

    }, [scrollValue]);
  return (
    <div 
    ref={RowContainer}
    className={`w-full flex items-center gap-3 my-12 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none":"overflow-x-hidden flex-wrap"}`}>
       {
           data && data.map((item)=>(
            <div key={item?.id} className="w-300 h-[220px]min-w-[300px] md:w-340 md:min-w-[340px] bg-gray-100 rounded-lg p-2 my-12  backdrop-blur-lg hover:drop-shadow-2xl flex flex-col items-center justify-between">

            <div className="w-full flex items-center justify-between">

                <motion.img whileHover={{scale:1.2}} src={item?.imageURL} alt="" className='w-40 -mt-8 drop-shadow-xl'/>
                <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center cursor-pointer hover:shadow-lg'>
                <MdShoppingBasket className='text-white'/>
                </motion.div>
            </div>
        
            <div className="w-full flex flex-col  items-end justify-end">
            <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.title}
            </p>
            <p className='mt-2 text-sm text-gray-600'>{item?.calories} calories</p>
            <div className='flex items-center gap-8'>
                <p className='text-lg text-textColor font-semibold'>
                    <span className='text-sm text-blue-500'>$</span>{item?.price}</p>
            </div>
            </div>
            </div>
           ))
       }
        </div>
  );
};

export default RowContainer;