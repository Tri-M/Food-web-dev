import React from 'react'
import Delivery from "../img/delivery.png";

import Hero from "../img/heroBg.png";
//import I1 from "../img/i1.png";
import { heroData } from '../utils/data';


const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id="home" >
      <div className="py-2 flex-1 flex flex-col items-start justify-start gap-4">
        <div className="flex items-center gap-2 justify-center bg-blue-100 px-4 py-1 rounded-full">
          <p className='text-base text-blue-600 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
          <img src={Delivery} 
          className="w-full h-full object-contain"
          alt="delivery" />
          </div>
        </div>

        <p className="text-[2rem] lg:text=[4rem] font-bold tracking-wide text-headingColor">
          Freshness and craziness delivered at <span className='text-blue-600 text-{3rem} md:text-[5rem]'>your doorstep.</span></p>

          <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          hello world 
          </p>

          <button type="button" className='bg-gradient-to-br from-blue-400 to-blue-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
      </div>

      <div className='py-2 flex-1 items-center relative'>
          
              <img src={Hero}  className="ml-auto h-420 w-full lg:w-auto lg:h-650" alt="herobg" />

              <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center px-32 py-4 gap-4 flex-wrap'>
                  {heroData && heroData.map(n=>(
                    <div key ={n.id}className=" lg: w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg">
                    <img src={n.imageSrc}  className="w-20 lg:w-40 -mt-10 lg:-mt-20 " alt="I1"/>
                    <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>
                    <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>{n.decp}</p>
                    <p className="text-sm font-semibold text-headingColor">
                      <span className="text-xs text-blue-700">₹</span>{n.price}
                      </p>
                    </div>
                  ))}
              </div>
          </div >
      
      
    </section>
  );
};

export default HomeContainer;
