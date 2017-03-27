const fs = require('fs');
let fileData = exports = module.exports;
fileData.getFileAsString =  (path) =>  {
    return new Promise((fulfill, reject) => {
        if(!path) reject("You did not provide a path");
            
        fs.readFile(path, 'utf8', (error, data) => {
            if (error)
            {
                reject(error);
                return;
            }
               
            fulfill(data);
        });

    })
};
/*
fileData.getFileAsJSON = (path) => {
    return new Promise((fulfill, reject) => {
        if(!path) reject("You did not provide a path");
        fs.readFile(path, 'utf8', (error, data) => {
            if(error)
            {
                reject(error);
                return;
            }
            try{
                let result = JSON.stringify(data);
                result = JSON.parse(result);
                fulfill(result);
            } catch (parsingError) {
                reject(parsingError);
            }
        });
    })
};*/

fileData.getFileAsJSON = (path) => {
    return new Promise((fulfill, reject) => {
        if(!path) reject("You did not provide a path");
        let myString = fileData.getFileAsString(path);
        myString.then((data) => {
            //data = JSON.stringify(data);
            fulfill(JSON.parse(data));
        }).catch((error) => {
            reject(error);
        })
        });
    };


fileData.saveStringToFile = (path, text) => {
    return new Promise((fulfill, reject) => {
        if(!path) reject("you did not provide a path");
        if(!text) reject("you did not provide text");
        
        fs.writeFile(path, text, (err) => {
            if (err) {
                reject(err);
                return;
            }
            fulfill(true);
        });

    })
};

fileData.saveJSONToFile = (path, obj) => {
    return new Promise((fulfill, reject) => {
        if(!path) reject("you did not provide a path");
        if(!obj) reject("you did not provide an object");

        let sObj = JSON.stringify(obj);

        fs.writeFile(path, sObj, (err) => {
            if (err) {
                reject(err)
                return;
            }
            fulfill(true);
        });
    })
};
