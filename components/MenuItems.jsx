import React from 'react'
import homepageBanner from '../assets/MenuImages/home.png'
import aboutUsBanner from '../assets/MenuImages/aboutUs.png'
import Banner from './Banner'

const MenuItems = () => (
  <div>
    <div className="grid grid-cols-2 gap-2 p-0.5">
      <div className="grid grid-rows-2 gap-0">
        <div>
          <Banner
            image={homepageBanner}
            height="h-40"
            text="Home"
            textStyle="text-[19px]"
            txtPosition="pt-[10vh] -pl-[14%]"
            txtWidth="w-3/2"
          />
        </div>
        <div>
          <Banner
            image={homepageBanner}
            height="h-[300px] -mt-9"
            text="Home"
            textStyle="text-[19px]"
            txtPosition="pt-[19vh] -pl-[14%]"
            txtWidth="w-3/2"
          />
        </div>

      </div>
      <div>
        <Banner
          image={aboutUsBanner}
          height="h-40"
          text="About Us"
          textStyle="text-[19px]"
          txtPosition="pt-[19vh] pl-[50%]"
          txtWidth="w-3/2"
        />
      </div>
    </div>
  {/*   Footer image */}
  </div>
)

export default MenuItems
