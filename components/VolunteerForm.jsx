import React from 'react'
import {
  Box,
  TextField,
  Grid,
  Typography,
  Select,
  MenuItem,
  FormControl,
  Button,
} from '@mui/material'
import mobileStyle from '../styles/mobile.module.scss'

// eslint-disable-next-line react/function-component-definition
export default function VolunteerForm() {
  const [scope, setScope] = React.useState()
  const handleChange = (event) => {
    setScope(event.target.value)
  }

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            Full Name
          </Typography>
        </Grid>
        <Grid
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
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            E-Mail
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <TextField
            placeholder="name@example.com"
            type="email"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            Scope of Volunteering
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <FormControl
            variant="filled"
            fullWidth
          >
            <Select
              value={scope}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            Date of Birth
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
        >
          <TextField
            placeholder="DD"
            type="number"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
        >
          <TextField
            placeholder="MM"
            type="number"
            variant="filled"
            color="primary"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
        >
          <TextField
            placeholder="YYYY"
            type="number"
            variant="filled"
            color="primary"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            Phone Number
          </Typography>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
        >
          <TextField
            placeholder="Code"
            type="number"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={8}
          sm={8}
        >
          <TextField
            placeholder="00 - 000 000"
            type="number"
            variant="filled"
            color="primary"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <Typography
            variant="h6"
            className={mobileStyle.InputTitle}
          >
            Address
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
        >
          <TextField
            placeholder="Address"
            type="text"
            variant="filled"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          className="mt-5"
        >
          <TextField
            placeholder="City"
            type="text"
            variant="filled"
            color="primary"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={6}
          className="mt-5"
        >
          <TextField
            placeholder="Zip Code"
            type="number"
            variant="filled"
            color="primary"
            fullWidth
          />
        </Grid>
        <Grid
          className="mt-5"
          item
          xs={12}
          sm={12}
        >
            <Button
              fullWidth
              className={mobileStyle.btnSubmit}
              variant="filled"
            >
              Submit
            </Button>
        </Grid>
      </Grid>
    </Box>
  )
}
