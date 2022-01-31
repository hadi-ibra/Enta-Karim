import { Button, Typography } from '@mui/material'
import React from 'react'
import teamMember1 from '../../assets/Team/teamMember1.png'

const CardItem = ({title,name,image,text,displayButton}) =>
  (
    <div className='my-5 flex  h-[25rem] bg-[#EAEAEA]'>
      <div className=" grid place-items-center  h-full w-1/2 rounded-lg">
        <div className='bg-[#0BBECF] relative  h-[18.4rem] w-[10.75rem] rounded-[1.7rem]'>
          <img className=' absolute bottom-0' src={image.src} alt=""/>
        </div>
      </div>
      <div className=' grid place-items-center h-full w-1/2 '>
        <div className=' justify-self-start pl-2 h-[16.4rem] pt-6 pl-0'>
              <Typography className='font-black  pb-0 text-[1.5rem] pb text-[#063B66] pb-3'>{name}</Typography>
              <p className='font-medium w-[9rem] text-[0.77rem] pt-1'>{text}</p>
          {displayButton && <Button
            className="mt-9 py-[0.6rem] px-4 text-[0.55rem] rounded-lg bg-[#063B66] text-[#FFFFFF] font-black shadow-md"
          >
            Learn More
          </Button>}
        </div>
      </div>
    </div>
  )


export default CardItem
