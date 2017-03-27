// Remember, we're in a browser: prevent global variables from happening
// I am passing the jQuery variable into the IIFE so that
// I don't have to rely on global variable name changes in the future
(function ($, localStorage) {

    var localStorageTableBody = $("#localstorage-data tbody");
    var clearStorage = $("#clear-storage");
    var loads = $("#localstorage-stats .loaded");
    //var loadsNums = 0;
    //localStorage.setItem("loadsNums", 0);
    var submits = $("#localstorage-stats .submitted");
    var lastVal = $("#localstorage-stats .lastval");
    var hash = $("#localstorage-stats .hash");
    var subNum = 0;
    if(window.location.hash)
    {
        localStorage.setItem("hash", window.location.hash);
        hash.text(localStorage.getItem("hash"));
    }
    else
    {
        hash.text("No hash");
    }
    //localStorage.setItem("subNum", subNum);
    var count = 0;
    localStorage.setItem("count", count);
    var keyValueInput = $("#localstorage-value");
    var kvpForm = $("#localstorage-form");
    var formAlert = $("#form-alert");
    if(localStorage.getItem("lastValue"))
    {
        lastVal.text(localStorage.getItem("lastValue"));
    }
    else
    {
        lastVal.text("");
    }
    if(localStorage.getItem("loadsNums"))
    {
        loads.text(localStorage.getItem("loadsNums"));
    }
    if(localStorage.getItem("subNum"))
    {
        submits.text(localStorage.getItem("subNum"));
    }
    function resetTable() {
        localStorageTableBody.empty();

        // We use the localStorage.key(number) property to get the key name at index number
        for (var i = 0; i < localStorage.length; i++) {
            var currentKey = localStorage.key(i);
            var curentValue = localStorage[currentKey];
            if(currentKey == "count" || currentKey == "loadsNums" || currentKey == "subNum" || currentKey == "hash" || currentKey == "lastValue")
            {
                continue;
            }
            var asJSON = JSON.parse(curentValue);
        

            var newHtmlString = "<tr><td>" + currentKey + "</td><td>" + curentValue;
            localStorageTableBody.append(newHtmlString);
        }
    }

    window.setInterval(function () {
            //loadsNums++;
            if(isNaN(localStorage.getItem("loadsNums")))
            {
                localStorage.setItem("loadsNums", 0);
            }
            var fuck = parseInt(localStorage.getItem("loadsNums")) + 1;
            localStorage.setItem("loadsNums", fuck)
            loads.text(fuck);

    }, 1500);
    clearStorage.click(function () {
        localStorage.clear();
        localStorage.setItem("loadsNums", 0);
        localStorage.setItem("subNum", 0);
        submits.text(localStorage.getItem("subNum"));
        lastVal.text("");
        resetTable();
    });

    window.addEventListener("hashchange", function (event) {
        localStorage.setItem("hash", window.location.hash);
        hash.text(localStorage.getItem("hash"));
    });
    kvpForm.submit(function (event) {
        event.preventDefault();

        // reset the form
        formAlert.addClass('hidden');
        formAlert.text('');
        //subNum++;
        

        var valStr = keyValueInput.val();
        if (!keyValueInput || valStr == "") {
            formAlert.text('You must provide a key name');
            formAlert.removeClass('hidden');
            return;
        }

        if(window.location.hash)
        {
            hash.text(localStorage.getItem("hash"));
        }
        else
        {
            hash.text("no hash");
        }
        if(isNaN(localStorage.getItem("subNum")))
        {
            localStorage.setItem("subNum", 0);
        }
        var subs = parseInt(localStorage.getItem("subNum")) + 1;
        localStorage.setItem("subNum", subs)
        submits.text(subs);
        // check if it's in the format of an object
        var jsonString = valStr;

        try {
            // this will throw when given a non JSON string
            JSON.parse(valStr);

            // if this succeeded, the user passed us something we could parse, and we don't have to encode it further
        } catch (e) {
            // this did not succeed, which means that the user passed us some sort of string
            jsonString = JSON.stringify(valStr);
        }

        localStorage[valStr] = jsonString;
        count++;
        keyValueInput.val('');
        localStorage.setItem("lastValue", jsonString);
        lastVal.text(localStorage.getItem("lastValue"));
        resetTable();
    });

    // Now we setup our table
    resetTable();
})(jQuery, window.localStorage);
// jQuery is exported as $ and jQuery
// the location API is accessed via the window.location variable
