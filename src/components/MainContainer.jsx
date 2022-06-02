import React,{useState,useEffect,useRef} from 'react';
import { motion } from "framer-motion";
import HomeContainer from "./HomeContainer";
import {MdChevronLeft,MdChevronRight} from "react-icons/md";
import RowContainer from './RowContainer';
import {useStateValue} from "../context/StateProvider";
import MenuContainer from './MenuContainer';
//import {ref} from "firebase/storage";

const MainContainer = () => {
  const [{foodItems},dispatch]=useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  //const RowContainerRef= useRef();
  useEffect(()=>{},[scrollValue])

  return (
    <div className="w-full h-auto flex flex-col items-center overflow-x-hidden justify-center">
      <HomeContainer />
      <section className="w-full m-6">
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100'>
            Fresh Fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
          <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 ease-in-out hover: shadow-lg flex items-center justify-center'onClick={()=>setScrollValue(-200)}>
            <MdChevronLeft className='text-lg text-white'/>
          </motion.div>
          <motion.div whileTap={{scale:0.75}} className='w-8 h-8 rounded-lg bg-blue-300 hover:bg-blue-500 cursor-pointer transition-all duration-100 ease-in-out hover: shadow-lg flex items-center justify-center' onClick={()=>setScrollValue(200)}>
            <MdChevronRight className='text-lg text-white'/>
          </motion.div>
          </div>
        </div>
        <RowContainer 
        scrollValue={scrollValue}
        flag={true} data={foodItems?.filter((n)=> n.category==="fruits")}/>
      </section>
      
      <MenuContainer/>
      
    </div>
  );
};



export default MainContainer;