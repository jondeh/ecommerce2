import React, { useRef, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2'
import '../../../SCSS/Doughnut.scss'

const options = { 
  maintainAspectRatio: false, 
  cutout: 50 ,
  hover: false,
  events: null,
}

const DoughnutGraph = ({ value }) => {
  console.log({ value })
  const data = {
    datasets: [
      {
        label: '# of Votes',
        data: [value, 10 - value],
        backgroundColor: [
          value < 4 ? 'green' : value < 7 ? 'orange' : 'red',
          'white'
        ],
        borderColor: ['whitesmoke']
        // borderWidth: 15
      }
    ]
  }
  const ref = useRef()

  return (
    <div className='graph-container'>
      <Doughnut data={data} ref={ref} options={options}></Doughnut>
      <span className='mos-value'>{value}</span>
    </div>
  )
}

export default DoughnutGraph
