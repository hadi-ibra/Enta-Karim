import React from 'react'
import Head from 'next/head'
import { Button } from '@mui/material'
import Partners from '../../components/Partners'
import Banner from '../../components/Banner'
import aboutUsBanner from '../../assets/banners/AboutUs.png'
import FinancialTransparency from '../../components/FinancialTransparency'
import { teamData } from '../../constants/teamData'
import List from '../../components/TeamAndVolunteer'
import Mission from '../../components/Mission'
import { missionData } from '../../constants/missionData'

const AboutUs = () => (
  <div>
    <Head>
      <title>Enta Karim | About Us</title>
    </Head>
    <div>
      <div className="pb-5">
        <Banner
          image={aboutUsBanner}
          height="h-[32rem]"
          text="Most Important Event done by Enta Karim"
          btnTxt="Get Involved"
          txtPosition="pt-[40vh] pl-[5%]"
          txtWidth="w-3/4"
        />
      </div>
      <Mission items={missionData}/>
      <List title='Team' items={teamData}/>
      <Partners />
    </div>
   <div className="mt-5 flex justify-center items-center">
     <p className="text-2xl font-bold">
       Financial Transparency
     </p>
   </div>
    <FinancialTransparency />
    <div className="flex justify-center items-center">
      <Button
        variant="contained"
        className="rounded-lg"
      >
        Download PDF
      </Button>
    </div>
  </div>
)

export default AboutUs
