import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { weatherReducer } from './store/weatherSlice.jsx'


const store = configureStore({
  reducer: {
    weather: weatherReducer
  }
})
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>

)
