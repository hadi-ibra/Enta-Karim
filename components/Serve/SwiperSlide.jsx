import mobileStyle from '../../styles/mobile.module.scss'
import serve1 from '../../assets/homepage/serve01.png'

const Item = (props) => {
  const { item } = props
  return (
    <div className={mobileStyle.Container}>
        <div className={mobileStyle.serveItem}>
          <div className={mobileStyle.serveImg}>
              <img
                src={serve1.src}
                alt=""
              />
          </div>
          <p className="text-lg">{item.title}</p>
          <div className={`${mobileStyle.serveText} `}>
            <p className="mt-2 text-ellipsis overflow-hidden">{item.text}</p>
          </div>
        </div>
    </div>
  )
}

export default Item
