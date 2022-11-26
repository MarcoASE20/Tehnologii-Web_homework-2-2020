function addTokens(input, tokens) {

    var inputString = input;
    var tokenArray = tokens;

    var i = 0;

    if (typeof inputString !== "string") {
        throw 'Invalid input'
    } else if (inputString.length < 6) {
        throw 'Input should have at least 6 characters'
    }

    for (var j = 0; j < tokenArray.length; j++) {
        if (typeof tokenArray[j].tokenName !== "string") {
            throw `Invalid array format`
        }
    }

    while (inputString.includes("...") == true) {
        inputString = inputString.replace("...", "${" + tokenArray[i].tokenName + "}")
        i++;
    }

    return inputString

}

var array = [
    {
        tokenName: "Marco"
    },
    {
        tokenName: "Bucuresti"
    }
];

var result = addTokens('Subsemnatul ... domiciliat in ...', array)
console.log(result)


const app = {
    addTokens: addTokens
}

module.exports = app;