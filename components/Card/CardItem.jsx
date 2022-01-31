import { truncate } from '../../utils'

const CardItem = ({ image, text }) => (
    <div className=" text-center bg-[#063B66] text-[#ffffff]  rounded-lg w-[15.25rem] h-[24rem] ">
      <div className="flex justify-center items-center h-56">
        <img
          className=""
          src={image.src}
          alt="logo"
        />
      </div>
      <p className="px-5 leading-none">
          {truncate(text, 149)}
          . Read More
      </p>
    </div>
)

export default CardItem
