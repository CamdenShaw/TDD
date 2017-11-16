const frogJumps = (end, jumpLength, start = 0) => {
    if(end - start === 0) throw new Error("end must be a value greater than start")
    if(end <= 0 || jumpLength <= 0) throw new Error("end and jumpLength must have a value larger than 0")
    if( start < 0) throw new Error("start cannot be less than 0")
    frogJumps = Math.ceil(jumpLength / (end - start))
    return frogJumps
}

module.exports = frogJumps