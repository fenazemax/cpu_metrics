import os from 'node:os'

export class CPUParams {
  static getUserTimes() {
    const cpus = os.cpus()

    let total = 0
    let idletime = 0

    for (const core of cpus) {
      const { user, nice, sys, idle, irq } = core.times

      total += user + nice + sys + idle + irq
      idletime += idle
    }

    return { total, idletime }
  }

  static async getUserCpuUsage() {
    const { total: total1, idletime: idle1 } = CPUParams.getUserTimes()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    const { total: total2, idletime: idle2 } = CPUParams.getUserTimes()

    const totalDelta = total2 - total1
    const idleDelta = idle2 - idle1

    const CPU_USAGE = (1 - idleDelta / totalDelta) * 100

    return CPU_USAGE
  }

  static getUserCoresSpeed() {
    const cpus = os.cpus()

    const speedObj = {}

    for(const [index, core] of cpus.entries()) {
      speedObj[`core${index}`] = core.speed
    }

    return speedObj
  }
} 
