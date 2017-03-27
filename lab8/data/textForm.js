let exportedMethods = {
    textEditor(text, inputString, numTimes, numSpaces) {
        if(typeof text !== "string") throw "must provide text";
        if(text == "") throw "must provide text";
        if(typeof inputString !== "string") throw "must provide a string";
        if(inputString == "") throw "must provide a string";
        if(typeof numTimes !== "number") throw "Must provide a number";
        if(isNaN(numTimes)) throw "Must provide a number";
        if(typeof numSpaces !== "number") throw "must provide a number";
        if(isNaN(numSpaces)) throw "must provide a number";
        if(numTimes < 1 || numTimes > 25) throw "Provide a number between 1 & 25";
        if(numSpaces < 1 || numSpaces > 25) throw "Provide a number between 1 & 25";
        var myResult = "";
        var count = 0;
        var i;
        if(numTimes * numSpaces > text.length) throw "Your paragraph is too tiny";
        for(i = 0; i < text.length; i+= numSpaces)
        {
            if(count < numTimes) {
                myResult += text.slice(i, i+numSpaces) + inputString;
                count++;
            }
            else if(count == numTimes) {
                myResult += text.slice(i, text.length);
                count++;
            }
        }

        return myResult;
    }
}

module.exports = exportedMethods;