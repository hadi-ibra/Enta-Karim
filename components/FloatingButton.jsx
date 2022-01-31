import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import { whatsappConfigurations } from '../constants/whatsapp'

const { number, message } = whatsappConfigurations
const FloatingButton = () => (
    <button
      onClick={() => {
        window.open(`https://wa.me/${number}?text=${message}`)
      }}
      type="button"
      className="p-0 w-14 h-14 rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none fixed bottom-[2.5%] right-[5%] z-[40] bg-[#EAEAEA]"
    >
        <WhatsAppIcon />
    </button>
)

export default FloatingButton
