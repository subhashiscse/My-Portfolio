import services from '../../static/config.js'
import React, { Component } from 'react';
const ServiceCard = ({index, title, icon}) => {
  return (
      <div options={{max:45, scale: 1, speed:450}} className={'bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'}>
            <img src="" alt={title} className={'w-16 h-16 object-contain'} />
          <h3 className={'text-white text-[20px] font-bold text-center'}>{title}</h3>
      </div>
  )
}
export function Project() {
  return (
    <div className={'mt-20 flex flex-wrap gap-10'}>
      {services.map((service, index)=> (
          <ServiceCard key={service.title} index={index} {...service} />
      ))}
    </div>
  );
}