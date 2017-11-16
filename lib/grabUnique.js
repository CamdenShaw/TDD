module.exports = function grabUnique(word) {
    if(word === '' || typeof word !== 'string') throw new Error("Whatcha doin, bro?  This function is for strings.")
    return letter = word.replace(/(.)\1*/g, (a, b) => {
      if(a.length === 1 && /\s\n|\s|\s\r|\n|\r/g.test(a) !== true) return b
      else return ''
    })[0]
}