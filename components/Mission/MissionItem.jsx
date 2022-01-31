import mobileStyle from '../../styles/mobile.module.scss'
import serve1 from '../../assets/homepage/serve01.png'
import { Typography } from '@mui/material'

const MissionItem = ({image,title,text}) =>  (
    <div className='h-[18.7rem] w-[13rem] rounded-lg bg-[#063B66]'>
      <div className='grid place-content-center pt-5 pb-2'>
        <div className='grid place-content-center  bg-[#FFFFFF]  h-[6.8rem] w-[6.8rem] rounded-full ' style={{border:"3px solid #0BBECF"}}>
          <img src={image.src} alt=""/>
        </div>
      </div>

      <Typography className="text-[#ffffff] font-bold text-2xl text-center">
        {title}
      </Typography>
      <div className='grid place-content-center'>
        <p className="mt-2 w-3/4 text-ellipsis text-[#ffffff] text-center w-[10rem]  text-[0.8rem] overflow-hidden">{text}</p>
      </div>
      </div>
  )

export default MissionItem
