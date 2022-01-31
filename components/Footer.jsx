import React from "react";
import { Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import logo from "../assets/entaKarim.svg";
import { socialLinks } from "../constants/socialLinks";

const { instagram, whatsApp, facebook } = socialLinks;
const Footer = () => (
  <footer className="bg-[#EAEAEA] rounded-t-lg text-[0.8rem] absolute inset-x-0  z-50 pt-1 border-b-2 border-blue-700  mt-3">
    <div className="container mx-auto px-6 py-3">
      <div className="flex gap-5 items-center">
        <div className="w-[50%]">
          <img width="md:5% sm:5% xs:74%" src={logo.src} alt="" />
        </div>
        <div className="flex gap-4 w-[60%]">
        <div className="inline-flex flex-col gap-4">
            <Link href="/about-us" className="text-defaultText no-underline">
              About Us
            </Link>
            <Link href="/volunteer" className="text-defaultText no-underline">
              Volunteer
            </Link>
            <Link href="/" className="text-defaultText no-underline">
              Activities
            </Link>
          </div>
          <div className="inline-flex flex-col gap-4">
            <Link
              href="/contribution"
              className="text-defaultText no-underline"
            >
              Contribution
            </Link>
            <Link href="/contact-us" className="text-defaultText no-underline">
              Contact Us
            </Link>
            <div className="flex flex-row justify-start">
              <a href={whatsApp} className="text-none no-underline">
                <WhatsAppIcon className="basis-1/3 mx-1" />
              </a>
              <a href={instagram}>
                <InstagramIcon className="basis-1/3 mx-1" />
              </a>
              <a href={facebook}>
                <FacebookIcon className="basis-1/3 mx-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
