import mobileStyle from '../../styles/mobile.module.scss'

const Item = (props) => {
  const { item } = props
  return (
    <div className={mobileStyle.Container}>
        <div className={mobileStyle.beneficiariesItem}>
          <div className={mobileStyle.beneficiariesImg}>
              {/* <img
                src={serve1.src}
                alt=""
              /> */}
          </div>
          <div className={`${mobileStyle.beneficiariesText} `}>
          <p className="text-lg">{item.title}</p>
          </div>
        </div>
    </div>
  )
}

export default Item
