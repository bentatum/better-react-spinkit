export default (total) => {
  const delays = []
  for (let i = 0; i < total; i++) {
    delays.push((Math.random() * (1.0 - 0.1) + 0.1).toFixed(2))
  }
  return delays
}
