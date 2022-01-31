import React from 'react'
import dynamic from 'next/dynamic'
import { useTheme } from '@mui/material/styles'
import {
  Card, Box, CardContent, Container, Typography,
} from '@mui/material'

const Chart = dynamic(
  () => import('react-apexcharts'),
  { ssr: false },
)

const FinancialTransparency = () => {
  const theme = useTheme()

  const chartOptions = {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: ['#243D65'],
    fill: {
      opacity: 1,
    },
    labels: ['Financial Transparency'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            color: theme.palette.text.primary,
            fontFamily: theme.typography.fontFamily,
            fontSize: '13px',
          },
          value: {
            color: theme.palette.text.secondary,
            fontFamily: theme.typography.fontFamily,
            fontSize: '14px',
          },
        },
        hollow: {
          size: '60%',
        },
        track: {
          background: theme.palette.background.default,
        },
      },
    },
    theme: {
      mode: theme.palette.mode,
    },
  }

  const chartSeries = [83]

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        p: 3,
      }}
    >
      <Container maxWidth="md">
        <Card>
          <CardContent>
            <Chart
              height={300}
              options={chartOptions}
              series={chartSeries}
              type="radialBar"
            />
            <Typography
              align="center"
              color="textSecondary"
              component="p"
              variant="caption"
              className="text-[14px]"
            >
              Organizations, or NGOs,
              were first called such in Article in the Charter of the newly formed.
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default FinancialTransparency
