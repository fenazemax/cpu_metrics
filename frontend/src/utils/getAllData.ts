import type { ICpuData } from "@/store/api/cpuApi";

export const getAllData = (data: ICpuData) => {
  const allCoresSpeed = Object.values(data.cpuSpeed)

  const allCores = Object.keys(data.cpuSpeed)

  const avgCpuSpeed = (allCoresSpeed.reduce((acc, value) => acc + value, 0)) / allCores.length

  const totalRamMB = (data.totalRam / 1024**2).toFixed(0)

  const usedRamMB = (data.usedMemory / 1024**2).toFixed(0)

  const dataValues = [avgCpuSpeed, totalRamMB, usedRamMB]

  return {
    dataValues
  }
}
