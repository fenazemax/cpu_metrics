import { CpuDoughnut } from '@/components/ui'
import type { ICpuData } from '@/store/api/cpuApi'
import { getChartContent } from '@/utils/getChartContent'
import cl from './data-diagrams.module.scss'

type PropsType = {
  data: ICpuData
}

export const DataDiagrams = (props: PropsType) => {
  const {data} = props

  const {
    CPU_LOAD_DATA, 
    CPU_LOAD_CONTENT, 
    RAM_LOAD_CONTENT, 
    RAM_LOAD_DATA
  } = getChartContent(data)

  return (
    <div className={cl.AppChartsContainer}>
        <CpuDoughnut 
          data={CPU_LOAD_DATA} 
          content={CPU_LOAD_CONTENT}
        />
        <CpuDoughnut 
          data={RAM_LOAD_DATA}
          content={RAM_LOAD_CONTENT}
        />
    </div>
  )
}
