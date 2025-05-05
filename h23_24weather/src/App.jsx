
import './App.css'
import ChartBlock from './components/ChartBlock'
import InputBlock from './components/InputBlock'
import { LoadingStatus } from './components/LoadingStatus'
import OutputLock from './components/OutputLock'


function App() {
 return (
  <>
   <InputBlock />
   <ChartBlock />
   <LoadingStatus />
   <OutputLock />
  </>
 )
  
}

export default App
