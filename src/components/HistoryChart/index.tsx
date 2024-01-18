import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ReactApexChart from 'react-apexcharts'
import Reveal from '../Reveal'

const HistoryChart = () => {
  const backgroundColor = '#070A15'
  const apiUrl =
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados?formato=json&dataInicial=01/01/2023&dataFinal=31/12/2023'

  const [chartData, setChartData] = useState([])
  const [chartType, setChartType] = useState<'line' | 'bar' | 'area'>('line')

  const handleToggleChartType = () => {
    setChartType((prevType) => {
      if (prevType === 'line') return 'bar'
      else if (prevType === 'bar') return 'area'
      else return 'line'
    })
  }

  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => {
        const history = response.data.filter((item) =>
          item.data.includes('2023'),
        )

        const chartData = history.map((test) => parseFloat(test.valor))

        setChartData(chartData)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const options: ApexCharts.ApexOptions = {
    chart: {
      id: 'projection-chart',
      type: chartType,
      background: backgroundColor,
      toolbar: {
        show: false,
      },
      foreColor: '#FFFFFF',
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 1800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    tooltip: {
      theme: 'dark',
    },

    title: {
      text: 'Histórico mensal da Taxa Selic - 2023',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      style: {
        fontFamily: 'Baloo 2',
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#FFFFFF',
      },
    },
    stroke: {
      curve: 'smooth',
    },
    markers: {
      size: 6,
      colors: ['#3dcf18'],
      strokeColors: '#FFFFFF',
      strokeWidth: 2,
      hover: {
        size: 8,
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'Fev',
        'Mar',
        'Abr',
        'Mai',
        'Jun',
        'Jul',
        'Ago',
        'Set',
        'Out',
        'Nov',
        'Dez',
      ],
      labels: {
        style: {
          colors: '#FFFFFF',
        },
      },
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'left',
      offsetY: -20,
      markers: {
        width: 12,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#FFFFFF',
        fillColors: ['#047CD8', '#4CAF50'],
      },
      itemMargin: {
        horizontal: 10,
        vertical: 5,
      },
      labels: {
        colors: '#FFFFFF',
      },
    },
  }

  const series: ApexAxisChartSeries = [
    {
      name: 'Taxa SELIC - 2023',
      data: chartData,
    },
  ]

  return (
    <div className="lg:w-[70%] m-auto w-full ">
      <Reveal>
        <ReactApexChart
          options={options}
          series={series}
          type={chartType as 'line' | 'bar' | 'area' | undefined}
          width="100%"
          height={450}
        />
      </Reveal>
      <Reveal>
        <div className=" text-center align-center w-[50%] p-[8px] px-4 bg-discount-gradient rounded-[10px] mb-2 cursor-pointer hover:scale-105 transition-all m-auto">
          <button onClick={handleToggleChartType}>Alternar Gráfico</button>
        </div>
      </Reveal>
    </div>
  )
}

export default HistoryChart
