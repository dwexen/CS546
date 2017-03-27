(function () {
    
    function textEditor(myText, myInputString, myNumTimes, myNumSpaces) {
        if(typeof myText !== "string") throw "must provide text";
        if(typeof myInputString !== "string") throw "must provide a string";
        if(myText == "") throw "must provide text";
        if(myInputString == null) throw "must provide a string";
        if(myInputString == undefined) throw "Must provide a string";
        if(myInputString == "") throw "must provide a string";
        if(typeof myNumTimes !== "number") throw "Must provide a number";
        if(isNaN(myNumTimes)) throw "Must provide a number";
        if(typeof myNumSpaces !== "number") throw "must provide a number";
        if(isNaN(myNumSpaces)) throw "must provide a number";
        if(myNumTimes < 1 || myNumTimes > 25) throw "Provide a number between 1 & 25";
        if(myNumSpaces < 1 || myNumSpaces > 25) throw "Provide a number between 1 & 25";
        if(myNumTimes * myNumSpaces > myText.length) throw "Your paragraph is too tiny";
        var myResult = "";
        var count = 0;
        var i;
        for(i = 0; i < myText.length; i+= myNumSpaces)
        {
            if(count < myNumTimes) {
                myResult += myText.slice(i, i+myNumSpaces) + myInputString;
                count++;
            }
            else if(count == myNumTimes) {
                myResult += myText.slice(i, myText.length);
                count++;
            }
        }

        return myResult; 
        //return ret.join(myInputString);
    }

    var clientForm = document.getElementById("clientform-form");

    if(clientForm) {
        var textElement = document.getElementById("text");
        var inputStringElement = document.getElementById("inputString");
        var numTimesElement = document.getElementById("numTimes");
        var numSpacesElement = document.getElementById("numSpaces");

        var errorContainer = document.getElementById("error-container");
        var errorTextElement = errorContainer.getElementsByClassName("text-goes-here")[0];

        var resultContainer = document.getElementById("result-container");
        var resultTextElement = resultContainer.getElementsByClassName("text-goes-here")[0];

        clientForm.addEventListener("submit", function (event) {
            event.preventDefault();

            try {
                // hide containers by default
                errorContainer.classList.add("hidden");
                resultContainer.classList.add("hidden");

                // Values come from inputs as strings, no matter what :(
                var numSpacesValue = numSpacesElement.value;
                var numTimesValue = numTimesElement.value;
                var textValue = textElement.value;
                var inputStringValue = inputString.value;

                var parsedNumTimes = parseInt(numTimesValue);
                var parsedNumSpaces = parseInt(numSpacesValue);
                

                var result = textEditor(textValue, inputStringValue, parsedNumTimes, parsedNumSpaces);
                resultTextElement.textContent = result;
                resultContainer.classList.remove("hidden");
            } catch (e) {
                var message = typeof e === "string" ? e : e.message;
                errorTextElement.textContent = e;
                errorContainer.classList.remove("hidden");
            }
        });
    }
})();