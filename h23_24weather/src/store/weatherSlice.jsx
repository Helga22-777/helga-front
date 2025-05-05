import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IconType } from '../utilities/constants.weather';


export const getWeather = createAsyncThunk(
  'weather/getWeather',
  async (cityName) => {
    try {
      //Getting coordinates by city name
      let coordinates = await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`)

      let {latitude, longitude} = coordinates.data.results[0]
      //console.log(coordinates);
      
      //Getting weather data
      let response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&timezone=auto&forecast_days=1`)
      // console.log(response.data.hourly);
      
      let { temperature_2m, rain, cloud_cover } = response.data.hourly;
     
      let temperature = [];

      const getIconType = (cloud_cover, rain) => {

        let iconType = '';
        iconType = (cloud_cover > 50) ?
        IconType.HEAVY_CLOUD : (cloud_cover > 30) ? 
        IconType.MODERATE_CLOUD : IconType.LIGHT_CLOUD;
        iconType = (rain > 7.6) ? 
        IconType.HEAVY_RAIN : (rain > 2.5) ? 
        IconType.MODERATE_RAIN : (rain > 1) ? 
        IconType.LIGHT_RAIN : iconType;

        return iconType;
      }
      //Weather data - 6, 9, 12, 15, 18
     
      for(let i = 6; i <= 18; i+=3) {
        temperature.push({
          id: cityName + i,
          time: `${i}:00`, 
          temp: temperature_2m[i],
          iconType: getIconType(cloud_cover[i], rain[i])
        })
      }
      console.log(temperature);
      
      return temperature
    } catch {
      throw new Error('Check the city name in correct.')
    } 
  }
)

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    isLoad: false,
    error: ''
  },
  extraReducers(builder) {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.isLoad = false;
      state.data = action.payload;
      state.error = '';
    })
    builder.addCase(getWeather.pending, (state, action) => {
      state.error = '';
     state.isLoad = true; 
    })
    builder.addCase(getWeather.rejected, (state, action)=>{
      state.error = action.error.message;
      state.isLoad = false;
    })
  }
})

export const weatherReducer = weatherSlice.reducer;