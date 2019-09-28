module.exports = text => {
  if (!text) return

  return text.split('').reduce((bobbed, char) => {
    return bobbed += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()
  })
}
