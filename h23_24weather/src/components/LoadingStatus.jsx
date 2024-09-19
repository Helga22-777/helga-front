import { useSelector } from "react-redux"
import { LiaSpinnerSolid } from "react-icons/lia"

export const LoadingStatus = () => {
  const error = useSelector(store => store.weather.error)
  const loading = useSelector(store => store.weather.isLoad)
  return (
    <>
        {loading && <LiaSpinnerSolid className="animate-spin w-full py-10 h-60 my-3" /> }
        {error && (<div className="flex place-items-center h-60 my-3">
          <p className="w-full text-lg text-white bg-red-500/50 py-5 text-center rounded-lg shadow-lg">
          {error}
          </p>
        </div>)}
    </>
  )
}