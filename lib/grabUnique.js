module.exports = function grabUnique(word) {
    if(word === '' || typeof word !== 'string') throw new Error("Whatcha doin, bro?  This function is for strings.")
    letter = word.replace(/(.)\1*/g, (group, letter) => {
      if(group.length === 1 && /\s/.test(group) === false) return letter
      else return ''
    })
    for(i=0; letter.length > i; i++){
      char = letter[i]
      if(letter.indexOf(char, 0) === i && letter.indexOf(char, i+1) === -1) {
        return l = letter[i] 
      } else l = undefined 
    }
    return l
}