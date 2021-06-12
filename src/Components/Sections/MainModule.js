import React, { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import { DashContext } from '../../context/DashContext'
import { CustomContext } from '../../context/CustomContext'
import DoughnutGraph from '../Utility/graphs/Doughnut'
import DashCard from '../Utility/dash/DashCard'
import axios from 'axios'

const DashMosquito = ({data}) => {
    const mappedData = data.map(day => {
        return <DashCard {...{ value: (day.Value*2) }}/>
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
    const { user } = useContext(UserContext)
    const { customLatLng } = useContext(CustomContext)
    const { moduleCounter, setModuleCounter } = useContext(DashContext)
    const [mosData, setMosData] = useState([])
    const [weatherData, setWeatherData] = useState([])

    console.log("USER MAIN MODULE: ", user)
  
    useEffect(async () => {

      if (user) {
        axios.get(`/get-mosquitoes/${user.lat}/${user.lng}`).then(res => {
          setMosData(res.data.slice(0, 4))
        }).catch(err => console.log(err))
      }
  
      const interval = setInterval(() => {
        setModuleCounter(moduleCounter =>
          moduleCounter < 2 ? moduleCounter + 1 : 0
        )
      }, 150000)
      return () => clearInterval(interval)
    }, [])
  
  
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
  
    return (
      <div className='main-module'>
        <div className='carousel'>{mappedModules[moduleCounter]}</div>
        <div className='module-nav'>{moduleNavButtons}</div>
      </div>
    )
  }

  export default MainModule;