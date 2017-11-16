module.exports = function letterCounter(word){
    if(typeof(word) === "string") {
        if(word.indexOf(' ') >= 0 || (/[A-Za-z]/).test(word) === false ) throw new Error("no spaces or special characters!")
            count = 1
            let newWord = ''
        for(i = 0; word.length > i; i++){
            if(word[i] === word[i+1]) {
                newWord += `${word.slice(i, i + 1) + (count + 1)}`
            } else {
                count = 1
            }
            (word[i] === word[i + 2] && word(i-1)) && (newWord = newWord.slice(0, -2))

            if(i == word.length - 1)
            return newWord
        }
        return newWord
    } else throw new Error("argument called in letterCounter must be a string")
}
