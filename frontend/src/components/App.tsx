import { useGetCpuDataQuery } from "@/store/api/cpuApi"
import { Doughnut } from 'react-chartjs-2';
import cl from './App.module.scss'

export const App = () => {
  const {data} = useGetCpuDataQuery()

  if (!data) return <div>Нет данных</div>

  const chartData = {
    labels: ["Used", "Idle"],
    datasets: [
      {
        data: [data.cpuUsage, 100 - data.cpuUsage],
        backgroundColor: ["#ff6384", "#36a2eb"]
      }
    ]
  }

  return (
    <div className={cl.AppContainer}>
      <Doughnut data={chartData}/>
    </div>
  )
}
