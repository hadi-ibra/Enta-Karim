import Head from 'next/head'
import React from 'react'
import Banner from '../../components/Banner'
import contributionBanner from '../../assets/banners/Contribution.png'
import RecentActivities from '../../components/recentActivities'
import ContributionIconsSlider from '../../components/ContributionIconsSlider'
import Beneficiary from "../../components/Beneficiary/"

const Contribution = () => (
  <div className="mt-[-10vh]">
    <Head>
      <title>Enta-Karim</title>
      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
    <div className="pb-5">
      <Banner
        image={contributionBanner}
        height="h-[32rem]"
        text="Most Important Event done by Enta Karim"
        btnTxt="Get Involved"
        txtPosition="pt-[80%] pl-[5%]"
        txtWidth="w-3/4"
      />
    </div>
    <ContributionIconsSlider />
    <div className='bg-[#eaeaea] pt-5'>
    <Beneficiary />
    </div>

    <RecentActivities/>
  </div>
)

export default Contribution
