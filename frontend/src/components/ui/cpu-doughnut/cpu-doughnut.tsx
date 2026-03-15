import { Doughnut } from 'react-chartjs-2'
import type { ChartOptions } from 'chart.js'
import cl from './cpu-doghnut.module.scss'

type PropsType = {
  content: string[]
  data: number[]
}

export const CpuDoughnut = (props: PropsType) => {
  const { data, content } = props

  const LABEL_COLOR = 'white'

  const CHART_COLORS = ['#ebe7e7', '#746969']

  const chartData = {
    datasets: [
      {
        label: 'load %',
        data: data,
        backgroundColor: CHART_COLORS,
        borderWidth: 0,
        cutout: '80%',
      },
    ],
  }

  const options: ChartOptions<'doughnut'> = {
    rotation: -90,
    circumference: 180,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      annotation: {
        // @ts-ignore
        annotations: {
          label1: {
            type: 'doughnutLabel',
            content: content,
            font: [{ size: 30, weight: 'bold' }, { size: 30 }],
            color: LABEL_COLOR,
          },
        },
      },
    },
  }

  return (
    <div className={cl.chartContainer}>
      <Doughnut data={chartData} options={options} />
    </div>
  )
}
