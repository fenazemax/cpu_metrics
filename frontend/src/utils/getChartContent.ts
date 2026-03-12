import type { ICpuData } from "@/store/api/cpuApi";

export const getChartContent = (data: ICpuData) => {
  const CPU_LOAD_DATA = [Math.round(data.cpuUsage), Math.round(100 - data.cpuUsage)]

  const RAM_LOAD_DATA = [Math.round(data.ramUsagePercent), Math.round(100 - data.ramUsagePercent)]

  const CPU_LOAD_CONTENT = [`${data.cpuUsage.toFixed(0)} %`, 'CPU usage']

  const RAM_LOAD_CONTENT = [`${data.ramUsagePercent.toFixed(0)} %`, 'RAM usage']

  return {
    CPU_LOAD_DATA,
    CPU_LOAD_CONTENT,
    RAM_LOAD_CONTENT,
    RAM_LOAD_DATA
  }

}
