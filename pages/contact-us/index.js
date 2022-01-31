import React from 'react'
import Head from 'next/head'
import { Marker } from '@react-google-maps/api'
import MapMain from '../../components/MapMain'
import { entaKarimLocation } from '../../constants/contactUsData'
import Banner from '../../components/Banner'
import contactUsBanner from '../../assets/banners/ContactUs.png'
import SupportTeamList from '../../components/SupportTeam/SupportTeamList'
import { supportTeamData } from '../../constants/supportTeamData'
import ContactUsForm from '../../components/contactUsForm'

const ContactUs = () => (
    <>
      <Head>
        <title>
          Enta Karim | Contact Us
        </title>
      </Head>
        <Banner
          image={contactUsBanner}
          height="h-[32rem]"
          text="Most Important Event done by Enta Karim"
          btnTxt="Get Involved"
          txtPosition="pt-[40vh] pl-[5%]"
          txtWidth="w-3/4"
        />
        <ContactUsForm />
        <MapMain
          center={entaKarimLocation}
          zoom={15}
        >
          <Marker position={entaKarimLocation} />
        </MapMain>
        <SupportTeamList items={supportTeamData} />
    </>
)

export default ContactUs
