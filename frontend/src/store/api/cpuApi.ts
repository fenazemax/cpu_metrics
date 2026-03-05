import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ICpuData {
  cpuUsage: number
  cpuSpeed: Record<string, number>
  cpuTotalTime: number
  cpuIdleTime: number,
  usedMemory: number,
  totalRam: number,
}

export const cpuApi = createApi({
  reducerPath: 'cpuApi',
  baseQuery: fetchBaseQuery({baseUrl: '/'}),
  endpoints: (build) => ({
    getCpuData: build.query<ICpuData, void>({
      queryFn: () => ({ 
        data: {
          cpuUsage: 0,
          cpuSpeed: {},
          cpuTotalTime: 0,
          cpuIdleTime: 0,
          totalRam: 0,
          usedMemory: 0,
        } 
      }),
      async onCacheEntryAdded(
        _,
        { updateCachedData, cacheDataLoaded, cacheEntryRemoved }
      ) {
        const ws = new WebSocket('ws://localhost:8080')
        try {
          await cacheDataLoaded

          const listener = (event: MessageEvent) => {
            const data: ICpuData = JSON.parse(event.data)

            updateCachedData((draft) => {
              draft.cpuUsage = data.cpuUsage
              draft.cpuSpeed = data.cpuSpeed
              draft.cpuTotalTime = data.cpuTotalTime
              draft.cpuIdleTime = data.cpuIdleTime
              draft.totalRam = data.totalRam
              draft.usedMemory = data.usedMemory
            })
          }

          ws.addEventListener('message', listener)
        } catch (error)  {
          console.error(error)
        }
        await cacheEntryRemoved

        ws.close()
      }
    })
  })
})

export const { useGetCpuDataQuery } = cpuApi
