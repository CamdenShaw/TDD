module.exports = function grabUnique(string) {
    if(string === '' || typeof string !== 'string') throw new Error("Whatcha doin, bro?  This function is for strings.")
    return letter = word.replace(/\s|(.)\1/g, '')[0]
}