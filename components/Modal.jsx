import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import mobileStyle from '../styles/mobile.module.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '95%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: '20px',
}

// eslint-disable-next-line react/function-component-definition
export default function BasicModal({
  open, // open state
  handleClose,
  title, // title of the modal
  children,
}) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className={mobileStyle.modal}
        >
          <Typography
            className={mobileStyle.modalTitle}
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Box className={mobileStyle.modalBody}>
            {children}
          </Box>
        </Box>
      </Modal>
    </div>
  )
}
