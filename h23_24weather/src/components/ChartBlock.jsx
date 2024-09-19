import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { useSelector } from 'react-redux';
import  ChartDataLabels  from 'chartjs-plugin-datalabels'

const ChartBlock = () => {

  const { isLoad, error, data } = useSelector(store => store.weather)

  let chartData = {
    labels: [],
    datasets: [{
      data: [],
      fill: true,
      backgroundColor:" rgba(255, 255, 255, 0.3)", 
      borderColor: "rgba(255, 255, 255, 1)",
      borderWidth: 2, 
      tension: 0.3,
      pointBackgroundColor: 'rgba(255, 255, 255, 1)',
    }]
  }

  let axesConfig = {
     grid: {
      display: false,
     },
     border: {
      display: false,
     },
     ticks: {
      display: false,
     }
  }
  let chartOptions = {
    maintainAspectRatio: false,
    scales: {
      x: axesConfig,
      y: axesConfig,
    },
    layout: {
      padding: {
      top: 30,
      left: 30,
      right: 30,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        color: '#fff',
        offset: 5,
        align: 'top',
        font: {
          size: 15,
        }
      }
    }
  }
  chartData.labels = data?.map(item => item.time)
  chartData.datasets[0].data = data?.map(item => item.temp)
  return (
    <>
    { !(isLoad || error) && 
    <div className="flex place-items-center w-full h-60 my-3">
      <Line data={chartData}
      options={chartOptions}
      plugins={[ChartDataLabels]} />
  </div>}
    </>
  )
}
export default ChartBlock;