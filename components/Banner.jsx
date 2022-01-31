import { Typography } from '@mui/material'
import { useState } from 'react'
import Modal from './Modal'
import VolunteerForm from './VolunteerForm'

const Banner = ({
  image,
  height,
  text,
  btnTxt,
  txtPosition,
  txtWidth,
  bg = 'rgb(0, 0, 0,1)-28%, rgba(255, 255, 255,0))',
  btnBg = 'bg-[#29C6D5]',
  subtitle,
  form,
  modalTitle = 'Volunteer Registration Form',
}) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const position = `${height} bg-center`
  const txtSection = `absolute ${txtPosition} text-[#ffffff] ${txtWidth}`
  return (
    <div
      className={position}
      style={{ background: `linear-gradient(to top, ${bg} ,url(${image.src})`, backgroundPosition: 'center' }}
    >
      <div className={txtSection}>
        <Typography className="text-2xl font-black">{text}</Typography>
        {subtitle && (
          <Typography className="text-md mt-2">{subtitle}</Typography>
        )}
        <button
          type="button"
          className={`text-xs ${btnBg} mt-3 py-3 px-5 rounded-lg font-black`}
          onClick={handleOpen}
        >
          {btnTxt}
        </button>
        <Modal
          open={open}
          handleClose={handleClose}
          title={modalTitle}
        >
          {form || <VolunteerForm />}
        </Modal>
      </div>
    </div>
  )
}

export default Banner
