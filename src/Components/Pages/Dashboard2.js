import React, { useContext, useEffect, useState } from 'react'
import '../../SCSS/Dashboard.scss'
import GoogleMap from '../Utility/GoogleMap'
import { IoIosArrowForward } from 'react-icons/io'
import MyPlan from '../Pages/MyPlan';
import axios from 'axios';
import { UserContext } from '../../context/UserContext';
import { ErrorOutlineRounded } from '@material-ui/icons';
import stockBox from '../../data/media/stock-box.jpg';
import sunPic from '../../data/media/01-s.png';


const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className='forecast-container'>
        <Forecast />
        <NextForecast />
      </div>
      <MyPlan />
    </div>
  )
}

const Forecast = () => {
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
        <div className='forecast-icon'></div>
        <div className='forecast-text'>
          <p>
            {e.title}
            {e.text}
          </p>
        </div>
        <IoIosArrowForward />
      </div>
    )
  })

  return (
    <div className='forecast' id='weather-forecast'>
      <div className='forecast-top'>
        <GoogleMap {...{ type: 'dash' }} />
      </div>
      <div className='forecast-bottom'>
        <WeatherBoard />
        {mappedData}
      </div>
    </div>
  )
}

const NextForecast = () => {
  return (
  <div className='forecast' id="next-forecast">
      <header><h2>Next Prescription</h2></header>
      <div className="next-body">
        <div><h2>Emergence Control</h2>
          <h5>Ships: </h5></div>
          
          <img src={stockBox} alt="pic of product"/>
          <p>Things are warming up again and bugs are coming out.</p>
      </div>
    </div>
  )
}

const WeatherBoard = () => {
    const [weather, setWeather] = useState(null)
    const { userLatLng } = useContext(UserContext)
    console.log("weather: ", weather)
    useEffect(() => {
        // console.log("ding", userLatLng)
        axios.get(`http://localhost:6233/get-day-weather/${userLatLng?.lat}/${userLatLng?.lng}`).then(res => setWeather(res.data)).catch(err => console.log("err: ", err))
        // setWeather()
    }, [])
  return (
    <div className='weather-board'>
        <img src={sunPic} />
        {weather && weather[0].Temperature.Imperial.Value}
        F -
        {weather && weather[0].WeatherText}
    </div>
  )
}

export default Dashboard
