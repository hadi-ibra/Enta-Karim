import mobileStyle from "../../styles/mobile.module.scss";
import serve1 from "../../assets/homepage/serve01.png";

const Item = (props) => {
  const { item } = props;
  return (
    <div className={mobileStyle.testimonialContainer}>
      <div className={`mb-8 ${mobileStyle.testimonialItem}`}>
        <p className={mobileStyle.title}>{item.name}</p>
        <div className={`${mobileStyle.Text}`}>
          <p className="text-base">{item.text.split(" ").splice(0, 20).join(" ")}...</p>
        </div>
        <div className={mobileStyle.Img}>
          {/* <img
                src={serve1.src}
                alt=""
              /> */}
        </div>
      </div>
    </div>
  );
};

export default Item;
