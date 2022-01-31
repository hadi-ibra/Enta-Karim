import React from 'react'
import { Grid, TextField, Typography, Input } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { entaKarimEmail, entaKarimPhone } from '../../constants/contactUsData'

const ariaLabel = { 'aria-label': 'description' };

const ContactUsForm = () => (
  <div className="bg-[#09BECF] h-full p-5 pb-8">
    <div className="flex items-center justify-center">
      <Typography className="text-[#ffffff] font-bold text-3xl mt-2">
        Contact Us
      </Typography>
    </div>
    <Grid
      sx={{ mt: 2 }}
      container
      spacing={3}
    >
      <Grid
        item
        md={6}
        xs={12}
      >
        <Input placeholder="Full Name" style={{backgroundColor:"#eaeaea", borderRadius: "10px",padding:"10px"}} fullWidth inputProps={ariaLabel} />

      </Grid>
      <Grid
        sx={{ mt: 3 }}
        className="md:mt-0 lg:mt-0"
        item
        md={6}
        xs={12}
      >
        <Input placeholder="Email" style={{backgroundColor:"#eaeaea", borderRadius: "10px",padding:"10px"}} fullWidth inputProps={ariaLabel} />

      </Grid>
      <Grid
        item
        sx={{ mt: 3 }}
        md={12}
        xs={12}
      >
        <Input placeholder="Text" style={{backgroundColor:"#eaeaea", borderRadius: "10px",padding:"10px"}} fullWidth multiline rows={3} inputProps={ariaLabel} />

      </Grid>
      <Grid
        item
        sx={{ mt: 3 }}
        md={12}
        xs={12}
      >
        <button
          type="button"
          className="mt-2 p-3 rounded-lg bg-[#063B66] text-[#FFFFFF] font-semibold shadow-md"
        >
          Get Involved
        </button>
      </Grid>
      <Grid
        item
        sx={{ mt: 3 }}
        md={12}
        xs={12}
      >
        <div className="grid grid-cols-2 gap-5">
          <div className="flex">
            <EmailIcon style={{ color: 'white' }} />
            <Typography className="text-[15px] text-[#ffffff] ml-2">
              {entaKarimEmail}
            </Typography>
          </div>
          <div className="flex ml-4">
            <LocalPhoneIcon style={{ color: 'white' }} />
            <Typography className="text-[15px] text-[#ffffff] ml-2">
              {entaKarimPhone}
            </Typography>
          </div>
        </div>
      </Grid>
    </Grid>
  </div>
)

export default ContactUsForm
