import React, { useState, useEffect } from 'react'
import {
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from '@mui/material'
import PeopleIcon from '@mui/icons-material/People'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import HomeIcon from '@mui/icons-material/Home'
import CallIcon from '@mui/icons-material/Call'
import Link from 'next/link'
import mobileStyle from '../styles/mobile.module.scss'

import logo from '../assets/entaKarim.svg'

import Modal from './Modal'
import DonationForm from './DonationForm'

const NavBar = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown'
      && (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={mobileStyle.menuList}
    >
      <List>
        <Link
          href="/"
          passHref
        >
          <ListItem
            button
            key="home"
          >
            <ListItemIcon className={mobileStyle.icon}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/about-us">
          <ListItem
            button
            key="aboutus"
          >
            <ListItemIcon className={mobileStyle.icon}>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
        </Link>
        <Link href="/volunteer">
          <ListItem
            button
            key="volunteer"
          >
            <ListItemIcon className={mobileStyle.icon}>
              <VolunteerActivismIcon />
            </ListItemIcon>
            <ListItemText primary="Volunteer" />
          </ListItem>
        </Link>
        <Link href="/contribution">
          <ListItem
            button
            key="contribution"
          >
            <ListItemIcon className={mobileStyle.icon}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M19.3,8.3l-5.1-5.1c-0.3-0.3-0.8-0.3-1.1,0l-2.3,2.3c-0.3,0.3-0.3,0.8,0,1.1l0.6,0.6c-0.4,0-1,0.2-1,0.2L8.9,7l0.4-0.4
	c0.1-0.1,0.2-0.3,0.2-0.6c0-0.2-0.1-0.4-0.2-0.6L6.9,3.2c-0.3-0.3-0.8-0.3-1.1,0L0.7,8.3C0.5,8.5,0.4,8.7,0.4,8.9
	c0,0.2,0.1,0.4,0.2,0.6L3,11.8C3.2,11.9,3.4,12,3.6,12s0.4-0.1,0.6-0.2l0.2-0.2c0.4,0.9,1.8,2.6,2.8,3.6l1.3,1.3
	c0.4,0.4,0.8,0.5,1,0.5c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.3-0.5,0.3-0.6c0.3,0.1,0.7,0,1-0.2c0.2-0.2,0.3-0.5,0.3-0.6
	c0.3,0.1,0.7,0,1-0.2c0.2-0.2,0.3-0.5,0.3-0.6c0.3,0.1,0.7,0,1-0.2c0.2-0.2,0.5-0.6,0.3-1.2c0.4-0.3,1-0.7,1.6-1.1
	c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.6-0.2l2.3-2.3C19.6,9.1,19.6,8.6,19.3,8.3z M3.6,11L1.5,8.9L6.3,4l2.1,2.1L3.6,11z
	 M13.4,13.4c0,0-0.1,0-0.2,0c-0.1,0-0.2-0.1-0.3-0.1c-0.2,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.4-0.3,0.6c0,0.1,0,0.1,0,0.1
	c0,0-0.1,0-0.2,0c-0.1,0-0.2-0.1-0.3-0.1c-0.3,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.4-0.3,0.6c0,0.1,0,0.1,0,0.1c0,0-0.1,0-0.2,0
	c-0.1,0-0.2,0-0.3,0c-0.3,0-0.4,0.1-0.5,0.2c-0.2,0.2-0.2,0.4-0.3,0.6c0,0.1,0,0.1-0.1,0.2C9.4,16,9.4,16,9.4,16
	C9.3,16,9.1,16,9,15.9l-1.3-1.3c-1.1-1.1-2.3-2.8-2.8-3.6l3.2-3.2L8.8,8C8.2,8.4,7.8,9.1,7.4,9.5C7.3,9.7,7.2,9.8,7.1,9.9
	c-0.3,0.3-0.4,0.6-0.3,0.9c0.1,0.2,0.3,0.4,0.5,0.7c0.2,0.2,0.5,0.3,0.8,0.3c0.6,0,1.2-0.5,1.8-0.9c0.1-0.1,0.5-0.3,0.7-0.5
	c0.9,0.8,1.8,1.7,2.4,2.3C13.6,13.2,13.4,13.3,13.4,13.4z M13.8,12.1C13.8,12.1,13.8,12,13.8,12.1c-0.9-0.9-2-1.8-2.6-2.4
	c-0.2-0.2-0.6-0.1-0.8,0c-0.3,0.1-0.6,0.2-1,0.5c-0.4,0.3-0.9,0.7-1.2,0.7c0,0-0.3-0.2-0.3-0.2c-0.1-0.1,0.2-0.3,0.3-0.5
	c0.5-0.6,1.2-1.4,2.1-1.7c0.8-0.3,1.3-0.2,2-0.2l2.9,2.9C14.7,11.4,14.2,11.8,13.8,12.1z M16.4,11l-4.9-4.9L13.7,4l4.9,4.9L16.4,11z
	"
                />
              </svg>
            </ListItemIcon>
            <ListItemText primary="Contribution" />
          </ListItem>
        </Link>
        <Link href="/contact-us">
          <ListItem
            button
            key="contactus"
          >
            <ListItemIcon className={mobileStyle.icon}>
              <CallIcon />
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItem>
        </Link>
      </List>
    </Box>
  )

  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    // update
    <div className={mobileStyle.NavContainer}>
      <div className={mobileStyle.Container}>
        <div className={mobileStyle.logo}>
          <Link
            href="/"
            passHref
          >
            <img
              src={logo.src}
              alt=""
            />
          </Link>
        </div>
        {/* update */}
        <div className={mobileStyle.donate}>
          <Button onClick={handleOpen}>
            <svg
              fill="black"
              viewBox="0 0 39.3 27.2"
            >
              <g>
                <path
                  d="M35.3,0.7H4.1C2.4,0.7,0.9,2,0.9,3.8v9c0,1.7,1.3,3.2,3.2,3.2h23.3v2.3c-1.7,0-2.5,1.2-2.5,2.3c0,1.2,0.8,2.3,2.5,2.3
				c0,1.2,0,1.7,0,2.8c0,0.5,0.3,0.8,0.8,0.8h7.5c0.5,0,0.8-0.3,0.8-0.8c0-1.2,0-5,0-6c0-1.5-1.3-2.8-2.8-2.8H32v-1h3.2
				c1.7,0,3.2-1.3,3.2-3.2v-9C38.3,2.2,37,0.7,35.3,0.7z M34.8,24.9H29v-0.8h5.8V24.9z M33.7,18.6L33.7,18.6c0.7,0,1.2,0.5,1.2,1.2
				v2.7H29v-0.2c0-0.5-0.3-0.8-0.8-0.8h-1c-0.3,0-0.7-0.3-0.7-0.7c0-0.3,0.3-0.7,0.7-0.7h1c0.5,0,0.8-0.3,0.8-0.8c0-1,0-4.2,0-5.2
				c0-0.3,0.3-0.7,0.7-0.7c0.3,0,0.7,0.3,0.7,0.7c0,2.3,0,1.7,0,3.8c0,0.5,0.3,0.8,0.8,0.8L33.7,18.6L33.7,18.6z M36.7,12.8
				c0,0.8-0.7,1.3-1.3,1.3h-3.2v-0.3c0-1.3-1-2.3-2.3-2.3s-2.3,1-2.3,2.3v0.3H4.2c-0.8,0-1.3-0.7-1.3-1.3v-9c0-0.8,0.7-1.3,1.3-1.3
				h31.1c0.8,0,1.3,0.7,1.3,1.3C36.7,3.8,36.7,12.8,36.7,12.8z"
                />
                <path
                  d="M8.2,5.8H7.4C7.2,5.8,7.1,6,7.1,6.1V10c0,0.2,0.2,0.3,0.3,0.3h0.8c1.3,0,2.3-1,2.3-2.3C10.4,6.8,9.4,5.8,8.2,5.8z
				 M8.2,9.6H7.7v-3h0.3c1,0,1.7,0.7,1.7,1.5S9.1,9.6,8.2,9.6z"
                />
                <path
                  d="M13.7,5.6c-1.3,0-2.3,1.2-2.3,2.5s1,2.3,2.2,2.3c1.2,0,2.2-1,2.2-2.3C15.9,6.8,14.9,5.6,13.7,5.6z M13.7,9.6
				c-0.8,0-1.5-0.7-1.5-1.7c0-0.8,0.7-1.7,1.5-1.7c0.8,0,1.5,0.7,1.5,1.7C15.2,9,14.4,9.6,13.7,9.6z"
                />
                <path
                  d="M20.2,6c-0.2,0-0.3,0.2-0.3,0.3V9l-2.2-3C17.5,5.6,17,5.8,17,6.1l0,0V10c0,0.2,0.2,0.3,0.3,0.3s0.3-0.2,0.3-0.3V7.3
				l2.2,2.8l0,0c0.2,0.3,0.7,0.2,0.7-0.2V6.3C20.5,6.1,20.4,6,20.2,6z"
                />
                <path
                  d="M23.9,6.1c-0.2-0.3-0.5-0.3-0.7,0L21.7,10c-0.2,0.5,0.5,0.7,0.7,0.3l0.3-0.8h1.7l0.3,0.7c0,0.2,0.3,0.3,0.5,0.2
				c0.2,0,0.3-0.3,0.2-0.5L23.9,6.1z M23,8.6l0.5-1.3L24,8.6H23z"
                />
                <path d="M28.3,5.8h-2.8c-0.5,0-0.5,0.7,0,0.7h1V10c0,0.5,0.7,0.5,0.7,0V6.6h1c0.2,0,0.3-0.2,0.3-0.3C28.7,6,28.5,5.8,28.3,5.8z" />
                <path
                  d="M32.3,6.6c0.2,0,0.3-0.2,0.3-0.3S32.5,6,32.3,6h-2.2l0,0l0,0c-0.2,0-0.3,0.2-0.3,0.3v3.8c0,0.2,0.2,0.3,0.3,0.3l0,0l0,0
				h2.2c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-1.8V8.5H32c0.2,0,0.3-0.2,0.3-0.3c0-0.2-0.2-0.3-0.3-0.3h-1.5V6.6H32.3z"
                />
              </g>
            </svg>
          </Button>
          <Modal
            open={open}
            handleClose={handleClose}
            form
            formType="donate"
            title="Make a Donation"
          >
            <DonationForm />
          </Modal>
        </div>
        <div>
          <Button onClick={toggleDrawer('right', true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
          <Drawer
            anchor="right"
            open={state.right}
            onClose={toggleDrawer('right', false)}
            className={mobileStyle.transparent}
          >
            {list('right')}
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default NavBar
