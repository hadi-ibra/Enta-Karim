import React from 'react'
import Head from 'next/head'
import Banner from '../../components/Banner'
import volunteerBanner from '../../assets/banners/Volunteer.png'
import Testimonials from '../../components/testimonials'
import Calendar from '../../components/Calender'
import { volunteerData } from '../../constants/volunteerData'
import List from '../../components/TeamAndVolunteer'

const Volunteer = () => (
  <div>
        <Head>
            <title>Enta-Karim | Volunteer</title>
            <link
              rel="icon"
              href="/favicon.ico"
            />
        </Head>
      <div className="pb-5">
          <Banner
            image={volunteerBanner}
            height="h-[32rem]"
            text="Most Important Event done by Enta Karim"
            btnTxt="Get Involved"
            txtPosition="pt-[80%] pl-[5%]"
            txtWidth="w-3/4"
          />
      </div>
    <List title='Volunteer' items={volunteerData} displayButton={true}/>
    <Calendar />
    <Testimonials />
  </div>
)

export default Volunteer
