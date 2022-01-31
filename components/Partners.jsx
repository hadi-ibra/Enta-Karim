import { Typography } from '@mui/material'
import CardList from './Card/CardList'
import { partnersData } from '../constants/partnersData'

const Partners = () => (
    <div>
      <div className="flex justify-center items-center my-3">
        <Typography
          className="text-[#063B66] font-bold text-2xl"
        >
          Partners & Stakeholders
        </Typography>
      </div>
      <CardList items={partnersData} />
    </div>
)

export default Partners
