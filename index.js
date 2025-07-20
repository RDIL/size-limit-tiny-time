/* Extracted from @size-limit/file 11.2.0 */
const SLOW_3G = 50 * 1024

function getLoadingTime(size, networkSpeed) {
  if (size === 0) return 0
  let time = size / networkSpeed
  if (time < 0.01) time = 0.01
  return time
}

export default [{
  name: 'size-limit-tiny-time',
  async step80(_, check) {
    let networkSpeed = (check.time && check.time.networkSpeed) || SLOW_3G
    let latency = (check.time && check.time.latency) || 0
    check.totalTime = check.loadTime = getLoadingTime(check.size, networkSpeed) + latency
  },
  wait80: 'Calculating times'
}]
