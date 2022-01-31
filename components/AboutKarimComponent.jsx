import { Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { aboutKarimDescription } from '../constants/homePage'
import { truncate } from '../utils'

const AboutKarimComponent = () => (
  <div className="my-3">
    <div className="flex items-center justify-center">
      <Typography className="text-[#29C6D5] font-bold text-2xl">
        About Karim
      </Typography>
    </div>
    <div className="bg-[#EAEAEA] h-fit my-2 flex gap-5">
      <div className="w-[40%]">
        <img
          alt=""
          src="/karim.png"
          style={{ height: '100%' }}
          className="h-fit object-cover w-112 rounded-r-[20px]"
        />
      </div>
      <div className="py-4 w-[60%]">
        <p className="text-xl font-bold text-[#3B4D80]">Enta Karim</p>
        <p className="mt-2 text-ellipsis overflow-hidden leading-4 pr-[2rem] text-[#063B66]">
          {truncate(aboutKarimDescription, 150)}
        </p>
        <Link
          passHref
          href="/about-us"
        >
        <button
          type="button"
          className="mt-2 py-2 px-3 text-sm rounded-lg bg-[#063B66] text-[#FFFFFF] font-semibold shadow-md"
        >
          Learn More
        </button>
        </Link>
      </div>
    </div>
  </div>
)

export default AboutKarimComponent
