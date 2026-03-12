import { useGetCpuDataQuery } from "@/store/api/cpuApi"
import cl from './App.module.scss'
import { CpuDoughnut, InfoTable, Loader, NoData } from "@/components/ui"
import { getChartContent } from "@/utils/getChartContent"

export const App = () => {
  const {data, isLoading} = useGetCpuDataQuery()
  
  if (isLoading) return <Loader />

  if (!data) return <NoData />

  const {
    CPU_LOAD_DATA, 
    CPU_LOAD_CONTENT, 
    RAM_LOAD_CONTENT, 
    RAM_LOAD_DATA
  } = getChartContent(data)

  return (
    <div>
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
      <div>
          <InfoTable />
      </div>
    </div>
  )
}
