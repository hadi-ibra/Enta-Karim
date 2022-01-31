import React from "react";
import Head from "next/head";
import AboutKarimComponent from "../components/AboutKarimComponent";
import Serve from "../components/Serve";
import Banner from "../components/Banner";
import homepageBanner from "../assets/banners/Homepage.png";
import Beneficiary from "../components/Beneficiary";
import Testimonials from "../components/testimonials";
import List from "../components/TeamAndVolunteer";
import { teamData } from "../constants/teamData";
import Calender from "../components/Calender/index";

const Home = () => (
  <div className="mt-[-10vh]">
    <Head>
      <title>Enta-Karim</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="pb-5">
      <Banner
        image={homepageBanner}
        height="h-screen"
        text="Most Important Event done by Enta Karim"
        btnTxt="Learn More"
        txtPosition="pt-[70vh] pl-[5%]"
        txtWidth="w-3/5"
      />
    </div>
    <div className="pb-5">
      <AboutKarimComponent />
    </div>

    <div className="pb-2">
      <Serve />
    </div>

    <Calender />
    <List title="Team" items={teamData} />
    <Beneficiary />
    <Testimonials />
  </div>
);

export default Home;
