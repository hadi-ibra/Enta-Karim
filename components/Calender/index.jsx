import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@mui/material'
import mobileStyle from '../../styles/mobile.module.scss'
import Event from './Event'

import { eventDate } from '../../constants/eventData'

const days = ['S', 'M', 'T', 'W', 'TR', 'F', 'S']
// const dates = [11, 12, 13, 14, 15, 16, 17]

const Calendar = () => {
  const today = new Date()
  const [events, setEvents] = useState(eventDate)
  const [dateState, setDateState] = useState(today)

  useEffect(() => {
    setEvents(eventDate.filter((e) => e.date
      .getDate() === dateState.getDate()))
  }, [dateState])

  return (
    <>
      <div className="flex items-center justify-center">
        <Typography className="text-[#29C6D5] font-bold text-2xl my-2">
          Upcoming Event
        </Typography>
      </div>
      <Grid
        container
        className={mobileStyle.calenderDays}
      >
        {days.map((day, index) => (
            <Grid
              key={day}
              item
              xs={1.5}
              sm={2}
              className={mobileStyle.day}
            >
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div
                onClick={() => {
                  setDateState(new Date(2021, 11, index + 12))
                }}
              >
                <Typography>{day}</Typography>
                <Typography className={mobileStyle.number}>
                  {index + 12}
                </Typography>
              </div>
            </Grid>
        ))}
      </Grid>
      <div>
        {events.map((element, index) => (
            <Event
              key={index}
              date={element.date}
              title={element.title}
              text={element.description}
              bg={index}
            />
        ))}
      </div>
    </>
  )
}
export default Calendar
