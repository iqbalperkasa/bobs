module.exports = text => text.split('').reduce((bobbed, char) => bobbed += Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()) // lol i literally wrote it in one shot
