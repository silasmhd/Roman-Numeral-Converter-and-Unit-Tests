module.exports = function roman(number) {
    /*
     * Check if number is not an integer
     */
    if (!Number.isInteger(number)) {
        return false
    }
    
    if (number < 1 || number > 3999){
        return false
    }

    let romanval = ""
    while(number > 0){
        if (number >= 1000){
            number -= 1000
            romanval += "M"
        } else if (number >= 100){
            number -= 100
            romanval += "C"
        } else if (number >= 50){
            number -= 50
            romanval += "L"
        } else if (number >= 10){
            number -= 10
            romanval += "X"
        } else if (number >= 5){
            number -= 5
            romanval += "V"
        } else if (number >= 1){
            number -= 1
            romanval += "I"
        }
    }

    return romanval;
};

