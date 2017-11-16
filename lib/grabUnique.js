module.exports = function grabUnique(word) {
    if(typeof word !== 'string'|| word === '' ) throw new Error("Whatcha doin, bro?  This function is for strings.")
    return letter = word.replace(/(.)\1*/g, (a, b) => {
      if(a.length === 1 && /\s/g.test(b) === false) return b
      else return ''
    })[0]
}