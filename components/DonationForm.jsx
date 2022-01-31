import React, { useState } from 'react'
import {
  Box,
  Button, Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material'
import mobileStyle from '../styles/mobile.module.scss'

const DonationForm = () => {
  const [selected, setSelected] = useState('1')
  return (
  <Box
    component="form"
    noValidate
    autoComplete="off"
  >
    <Grid
      container
      spacing={1}
    >
      <Grid
        item
        sx={{ mt: 1 }}
        xs={3}
        sm={3}
      >
        <Button
          className={`px-3 rounded-lg ${selected === '1' ? 'bg-[#02c8da]' : ''}`}
          variant="contained"
          onClick={() => setSelected('1')}
        >
          $20
        </Button>
      </Grid>
      <Grid
        item
        sx={{ mt: 1 }}
        xs={3}
        sm={3}
      >
        <Button
          className={`px-3 rounded-lg ${selected === '2' ? 'bg-[#02c8da]' : ''}`}
          variant="contained"
          onClick={() => setSelected('2')}
        >
          $50
        </Button>
      </Grid>
      <Grid
        item
        sx={{ mt: 1 }}
        xs={3}
        sm={3}
      >
        <Button
          className={`px-3 rounded-lg ${selected === '3' ? 'bg-[#02c8da]' : ''}`}
          onClick={() => setSelected('3')}
          variant="contained"
        >
          $100
        </Button>
      </Grid>
      <Grid
        item
        sx={{ mt: 0.5 }}
        xs={3}
        sm={3}
      >
        <TextField
          onClick={() => setSelected('4')}
          className="h-2"
          placeholder="Other"
          type="number"
          variant="filled"
          fullWidth
        />
      </Grid>
    </Grid>
    <Grid
      container
      spacing={1}
    >
      <Grid
        item
        sx={{ mt: 2 }}
        xs={12}
        sm={12}
      >
        <p className="text-primary text-lg font-bold">Select Your Money Transaction</p>
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Orphans"
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Families in need"
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Elders"
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Children"
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox />}
          label="Widows"
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Special case children"
        />
      </Grid>
    </Grid>
    <Grid
      container
      spacing={3}
    >
      <Grid
        sx={{ mt: 2 }}
        item
        xs={12}
        sm={12}
      >
        <div
          className={`mt-3 py-2 rounded-md ${mobileStyle.btnSubmit} flex justify-center items-center`}
        >
          <Typography className="text-lg">Billing Information</Typography>
        </div>
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <TextField
          placeholder="First Name"
          type="text"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <TextField
          placeholder="Last Name"
          type="text"
          variant="filled"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={12}
        sm={12}
      >
        <TextField
          placeholder="Card Number"
          type="number"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        item
        sx={{ mt: 1 }}
        xs={4}
        sm={4}
      >
        <TextField
          placeholder="Month"
          type="number"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        item
        sx={{ mt: 1 }}
        xs={4}
        sm={4}
      >
        <TextField
          placeholder="Day"
          type="number"
          variant="filled"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid
        item
        sx={{ mt: 1 }}
        xs={4}
        sm={4}
      >
        <TextField
          placeholder="Year"
          type="number"
          variant="filled"
          color="primary"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={12}
        sm={12}
      >
        <TextField
          placeholder="Street Address"
          type="text"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <TextField
          placeholder="City"
          type="text"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={6}
        sm={6}
      >
        <TextField
          placeholder="Zip Code"
          type="number"
          variant="filled"
          fullWidth
        />
      </Grid>
      <Grid
        sx={{ mt: 1 }}
        item
        xs={12}
        sm={12}
      >
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Save card information"
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
      >
        <Button
          className="px-7 rounded-lg"
          color="primary"
          variant="contained"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  </Box>
  )
}

export default DonationForm
