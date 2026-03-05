import {CPUParams, RAMParams} from "./cpu-usage.js"
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', async function connection(ws) {
  const interval = setInterval( async () => {
    const usage = await CPUParams.getUserCpuUsage()
    const speed = CPUParams.getUserCoresSpeed()
    const {total, idletime} = CPUParams.getUserTimes()
    const usedMemory = RAMParams.calculateUsedRAM()
    const totalRam = RAMParams.totalRAM
    const ramUsagePercent = RAMParams.getPercentOfUsage()

    ws.send(JSON.stringify({
      cpuUsage: usage,
      cpuSpeed: speed,
      cpuTotalTime: total,
      cpuIdleTime: idletime,
      usedMemory,
      totalRam,
      ramUsagePercent,
    }))
  }, 1000)

  ws.on('close', () => {
    clearInterval(interval)
  })
})
console.log('WebSocket сервер запущен на ws://localhost:8080');
