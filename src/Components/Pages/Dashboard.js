import React, { useContext, useEffect, useState } from 'react'
import '../../SCSS/Dashboard.scss'
import GoogleMap from '../Utility/GoogleMap'
import { IoIosArrowForward } from 'react-icons/io'
import { FiWind } from 'react-icons/fi'
import { IoWaterSharp } from 'react-icons/io5'
import MyPlan from '../Pages/MyPlan'
import axios from 'axios'
import { UserContext } from '../../context/UserContext'
import { CustomContext } from '../../context/CustomContext'
import { ErrorOutlineRounded } from '@material-ui/icons'
import stockBox from '../../data/media/stock-box.jpg'
import sunPic from '../../data/media/01-s.png'
import DashMain from '../Sections/DashMain'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='dashboard-body'>
        <div className='body-col'>
          <WeatherForecast />
        </div>
        <div className='body-col mid'>
          <DashMain />
        </div>
        <div className='body-col right'>
          <NextForecast />
        </div>
      </div>
      {/* <MyPlan /> */}
    </div>
  )
}

const WeatherForecast = () => {
  const data = [
    {
      title: <h6>Greenlight to spray</h6>,
      text: <span>Best time is between 6 and 8 pm.</span>
    },
    {
      title: <h6>Watch for new ant colonies</h6>,
      text: <span>No rain expected until Friday</span>
    },
    {
      title: <h6>Greenlight to spray</h6>,
      text: <span>No rain expected until Friday</span>
    },
    {
      title: <h6>Watch for roaches</h6>,
      text: <span>No rain expected until Friday</span>
    }
  ]

  const mappedData = data.map((e, i) => {
    return (
      <div className='forecast-row'>
        <div className='forecast-icon'>
          <IoIosArrowForward />
        </div>
        <div className='forecast-text'>
          <p>
            {e.title}
            {e.text}
          </p>
        </div>
      </div>
    )
  })

  const weatherIcons = [...Array(7)].map((e, i) => {
    let idNum = i + 1

    return (
      <img
        src={sunPic}
        id={`weather-icon${idNum}`}
        className='weather-circle'
      />
    )
  })

  return (
    <div className='forecast' id='weather-forecast'>
      {/* {weatherIcons} */}
      <div className='forecast-top'>
        {/* <div className="blue-circle"></div> */}
        <div className='forecast-circle'>
          <GoogleMap {...{ type: 'dash' }} />
        </div>
      </div>
      <div className='forecast-bottom'>
        <div className='forecast-bottom-container'>
          <WeatherBoard />
          {mappedData}
        </div>
      </div>
    </div>
  )
}

const NextForecast = () => {
  return (
    <div className='forecast' id='next-forecast'>
      <header>
        <h2>Next Prescription</h2>
      </header>
      <div className='next-body'>
        <div>
          <h2>Emergence Control</h2>
          <h5>Ships: </h5>
        </div>

        <img src={stockBox} alt='pic of product' />
        <p>Things are warming up again and bugs are coming out.</p>
      </div>
    </div>
  )
}

const WeatherBoard = () => {
  const [weather, setWeather] = useState(null)
  const { userLatLng } = useContext(UserContext)
  const { customLatLng } = useContext(CustomContext)
  console.log('weather: ', weather)
  console.log({ userLatLng })
  console.log({ customLatLng })
  useEffect(() => {
    axios
      .get(
        `/get-open-weather/${customLatLng ? customLatLng.lat : userLatLng?.lat}/${customLatLng ? customLatLng.lng : userLatLng?.lng}`
      )
      .then(res => setWeather(res.data))
      .catch(err => console.log('err: ', err))
  }, [])
  return (
    <div className='weather-board'>
      {/* <img src={sunPic} /> */}
      {weather && (
        <>
          <div className='weather-icon'>
            <img
              src={`http://openweathermap.org/img/wn/${weather.current?.weather[0].icon}@2x.png`}
            />
            <span className="min-max">
              {Math.round(weather.daily[0].temp.max)}&#176;/
              {Math.round(weather.daily[0].temp.min)}&#176;
            </span>
          </div>
          <span className="current-temp">{Math.round(weather.current.temp)}&#176;</span>
          <div className='flex-row precip'>
            <IoWaterSharp />
            <span>{weather.daily[0].pop * 100}%</span>
          </div>
          <div className='flex-row wind'>
            <FiWind />
            <span>&nbsp;{Math.round(weather.current?.wind_speed)}mph</span>
          </div>
        </>
      )}
    </div>
  )
}

export default Dashboard
