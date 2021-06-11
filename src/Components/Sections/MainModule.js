import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { DashContext } from '../../context/DashContext'
import { CustomContext } from '../../context/CustomContext'
import DoughnutGraph from '../Utility/graphs/Doughnut'
import DashCard from '../Utility/dash/DashCard'
import axios from 'axios'

const accuAPI = 'JQ3tLpCYP9VNGAJfTGnzJFjZIpc1lKdf'

const DashMosquito = ({data}) => {
    console.log("DINT", { data })

    const mappedData = data.map(day => {
        console.log({ day })
        console.log("categoryValue: ", day.CategoryValue)
        return <DashCard {...{ value: day.CategoryValue }}/>
    })
    return (
      <div className='dash-module dash-mosquitoes'>
        { mappedData }
      </div>
    )
  }
  const DashAlerts = () => {
    return <div className='dash-module dash-alerts'>Alerts</div>
  }
  const DashSpiders = () => {
    return <div className='dash-module dash-spiders'>Spiders</div>
  }
  
  let dummyData = [
    {
      moduleType: 'mosquito',
      module: <DashMosquito />
    },
    {
      moduleType: 'alerts',
      module: <DashAlerts />
    },
    {
      moduleType: 'spiders',
      module: <DashSpiders />
    }
  ]
  
  const MainModule = () => {
    const { userLatLng } = useContext(UserContext)
    const { customLatLng } = useContext(CustomContext)
    const { moduleCounter, setModuleCounter } = useContext(DashContext)
    const [mosData, setMosData] = useState([])
    const [weatherData, setWeatherData] = useState([])
  
    useEffect(async () => {
      const { lat, lng } = customLatLng
  
      let locationKey = await axios
        .get(
          `https://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuAPI}&q=${lat}%2C${lng}&language=en-us&details=true&toplevel=false`
        )
        .then(res => res.data)
        .catch(err => console.log('err: ', err))
  
      console.log({ locationKey })
  
      if (locationKey) {
        let mosquitoData = await axios
          .get(
            `https://dataservice.accuweather.com//indices/v1/daily/5day/${locationKey.Key}/17?apikey=${accuAPI}&language=en-us&details=false`
          )
          .then(res => setMosData(res.data.slice(0, 4)))
          .catch(err => console.log(err))
      }
  
      // todo put API call on backend once proxy

      // axios.get(`/get-mosquitoes/${customLatLng.lat}/${customLatLng.lng}`).then(res => console.log(res.data))
  
      const interval = setInterval(() => {
        setModuleCounter(moduleCounter =>
          moduleCounter < 2 ? moduleCounter + 1 : 0
        )
      }, 150000)
      return () => clearInterval(interval)
    }, [])
  
    console.log({ mosData })
  
    // const mappedModules = dummyData.map(module => {
    //   return module.module
    // })

    const mappedModules = [<DashMosquito {...{data: mosData}}/>]
  
    const moduleNavButtons = dummyData.map((module, i) => {
      return (
        <button
          style={{ background: i === moduleCounter ? 'red' : null }}
          onClick={() => setModuleCounter(i)}
        ></button>
      )
    })
  
    console.log({ userLatLng })
    console.log({ customLatLng })
    return (
      <div className='main-module'>
        <div className='carousel'>{mappedModules[moduleCounter]}</div>
        <div className='module-nav'>{moduleNavButtons}</div>
      </div>
    )
  }

  export default MainModule;