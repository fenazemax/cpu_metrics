import {CPUParams} from "./cpu-usage.js"
import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 })

wss.on('connection', async function connection(ws) {
  const interval = setInterval( async () => {
    const usage = await CPUParams.getUserCpuUsage()
    const speed = CPUParams.getUserCoresSpeed()
    const {total, idletime} = CPUParams.getUserTimes()

    ws.send(JSON.stringify({
      cpuUsage: usage,
      cpuSpeed: speed,
      cpuTotalTime: total,
      cpuIdleTime: idletime
    }))
  }, 1000)

  ws.on('close', () => {
    clearInterval(interval)
  })
})
console.log('WebSocket сервер запущен на ws://localhost:8080');
