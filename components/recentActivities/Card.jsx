import React from 'react'
import RecentActivities from '../../assets/banners/RecentActivities1.png'
import Banner from '../Banner'
import { truncate } from '../../utils'
import DonationForm from '../DonationForm'

const Card = () => (
    <div
      className="bg-[#EAEAEA] h-96 my-5"
    >
        <Banner
          bg="rgb(0, 0, 0,1)-28%, rgba(6,59,102,0))"
          image={RecentActivities}
          form={<DonationForm />}
          height="h-96"
          text="Food Fundraising"
          btnTxt="Learn More"
          txtPosition="pt-[45%] pl-[5%]"
          txtWidth="w-3/4"
          btnBg="bg-[#063B66] text-lg"
          modalTitle="ahmad"
          subtitle={truncate('Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy ', 120)}
        />
    </div>
)

export default Card
