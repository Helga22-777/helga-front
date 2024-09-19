import { useSelector } from "react-redux";
import { WiCloud, WiCloudy, WiDayRain, WiDayRainMix, WiDaySunny, WiThunderstorm } from "react-icons/wi";
import { IconType } from '../utilities/constants.weather'

function Icon ({iconType}) {

     const className = 'w-full my-3 text-[5rem]'

  switch(iconType) {
    case IconType.LIGHT_RAIN: return <WiDayRainMix className={className} />
    case IconType.MODERATE_RAIN: return <WiDayRain className={className} />
    case IconType.HEAVY_RAIN: return <WiThunderstorm className={className} />
    case IconType.LIGHT_CLOUD: return <WiDaySunny className={className} />
    case IconType.MODERATE_CLOUD: return <WiCloud className={className} />
    case IconType.HEAVY_CLOUD: return <WiCloudy className={className} />
    default: break;
  }
  return <></>
}

function OutputLock () {
  const data = useSelector(store => store.weather.data)
  const store = useSelector(store => store.weather)
  console.log(store);
  
  return (
    <div className="flex justify-start gap-x-5">
      {
        data?.map(item => {
          return (
            <div className="shadow-xl rounded-lg text-center px-5 bg-white/50" key={item.id}>
               <Icon iconType={item.iconType} />
               <p className="p-5 pt-0 text-xl">{item.temp} &#186;C</p>
               <hr className="border-purple-950" />
               <p className="p-5 pt-1 text-base">{item.time}</p>
            </div>
          )
        })}
    </div>
  )
}

export default OutputLock;