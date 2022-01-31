
const SupportTeamItem = ({image,name}) =>  (
  <div className=" text-[#063B66] text-center" style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }}>
      <img
        src={image.src}
        alt="logo"
        className="max-w-[50%]"
      />
      <p className="font-bold text-center pt-3">{name}</p>
    </div>

  )

export default SupportTeamItem
