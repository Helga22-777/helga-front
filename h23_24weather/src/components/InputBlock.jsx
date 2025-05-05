import { useRef  } from 'react'
import { useDispatch } from 'react-redux'
import { getWeather } from '../store/weatherSlice'

function InputBlock () {

    const inputRef = useRef(null)
    const dispatch = useDispatch()
    const clickHandler = () => {
      dispatch(getWeather(inputRef.current.value)) 
    }
    dispatch(getWeather('Kyiv'));
    const handlerEnter = (e) => {
      if(e.key === 'Enter') {
        clickHandler();
        inputRef.current.focus()
      }
    }
    
    return (
     <div className='flex justify-around rounded-lg shadow-xl p-5 bg-white/50'
     onKeyDown={handlerEnter}>
      <input className=' capitalize outline-none text-xl w-3/4 bg-white/50 px-5 py-2' ref={inputRef} type="text" placeholder='City name'
      defaultValue='Kyiv'
      autoFocus/>
      <button className='bg-white/50 rounded-lg px-5 py-2 text-xl' onClick={clickHandler}>Search</button>
     </div>
  )
}
export default InputBlock;