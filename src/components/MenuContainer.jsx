import React,{useState} from 'react'
import {IoFastFood} from "react-icons/io5";
import {categories} from "../utils/data";
const MenuContainer = () => {
    const [filter,setFilter] = useState("fruits")
  return (
    <section className="w-full my-6" id="menu">
     <div className='w-full flex flex-col items-center justify-center'>
     <p className='text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:bottom-0 before:left-0 before:bg-gradient-to-tr from-blue-400 to-blue-600 transition-all ease-in-out duration-100 mr-auto'>
            Our Hot Dishes
          </p>
          <div className="w-full flex items-center justify-start lg:justify-center py-6 gap-8 overflow-x-scroll scrollbar-none">
            {categories && categories.map((category=>(
                <div className="w-10 h-10 rounded-full bg-cartNumBg group-hover:bg-card flex items-center justify-center">
                    <div className={`w-10 h-10 rounded-full shadow-lg ${filter===category.urlParamName ? 'bg-white' : 'bg-cartNumBg'} group-hover:bg-white flex items-center justify-center`}>
                <IoFastFood
                className={`${filter===category.urlParamName ? 'text-textColor':'text-white'} group-hover:text-textColor text-lg`}
                />
                </div>
                <p className={'text-sm ${filter===category.urlParamName ? 'text-white':'text-textColor'} group-hover:text-white'}>{category.name}</p>
                </div>
            ))}
          </div>
         </div>   
    </section>
  )
}

export default MenuContainer;