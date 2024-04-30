module.exports = function roman(number) {
    /*
     * Check if number is not an integer
     */
    if (!Number.isInteger(number)) {
        return false
    }
    
    let romanval = ""
    if (number >= 1000){
        number -= 1000
        romanval += "M"
    } 

    return romanval;
};

