import { useGetCpuDataQuery } from '@/store/api/cpuApi'
import { InfoTable, Loader, NoData } from '@/components/ui'
import { DataDiagrams } from '@/components/features'
import cl from './main-chart.module.scss'

export const MainChart = () => {
  const { data, isLoading } = useGetCpuDataQuery()

  if (isLoading) return <Loader />

  if (!data) return <NoData />

  return (
    <div className={cl.AppContainer}>
      <InfoTable data={data} />
      <DataDiagrams data={data} />
    </div>
  )
}
