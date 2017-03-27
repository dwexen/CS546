let tM = exports = module.exports;

tM.createMetrics = (text) => {
    let tL = 0;
    let tW = 0;
    let uW = 0;
    let lW = 0;
    let aWL = 0;
    let nOS = 0;
    let tC = 0;
    let isLet = true;
    let notLetters = ['!', ',', '.', '?', ' ', '"','\n', '(', ')', '\t', '\''];
    let wordOccurrences = [];
    let word = "";
    let wordLength = 0;
    for(let i = 0; i <= text.length; i++)
    {
        
        for(let j = 0; j <= notLetters.length; j++)
        {
            if(text[i] == notLetters[j])
            {
                isLet = false;
                if(text[i] == ' ' || text[i] != ' ' && (i+1) > text.length)
                {
                    tW++;
                    aWL += wordLength;
                    if(wordLength >= 6)
                    {
                        lW++;
                    }
                    wordLength = 0;
                }
                if(word != "")
                {
                    wordOccurrences.push(word);
                }
                if(text[i] != ' ' && text[i] != ',' && text[i] != undefined || text[i] == "\n")
                {
                    nOS++;
                }
                word = "";
                break;
            }
        
        }
        if(isLet)
        {
            tL = tL + 1;
            wordLength++
            word += text[i];
        }
        isLet = true;
    }
    let uniqueW = [];
    let unique = true;
    let wordObj = {};
    for(let i = 0; i < wordOccurrences.length; i++)
    {
        for(let j = 0; j < uniqueW.length; j++)
        {
            if(wordOccurrences[i].toUpperCase() == uniqueW[j].toUpperCase())
            {
                unique = false;
                wordObj[wordOccurrences[i].toLowerCase()]++;
            }
        }
        if(unique)
        {
            uniqueW.push(wordOccurrences[i]);
            wordObj[wordOccurrences[i].toLowerCase()] = 1;
        }
        unique = true;
    }
    aWL /= tW;
    let uniqueWords = uniqueW.length;
    let textComplex = (tW/nOS) + ((lW * 100) / tW);
   /*
    console.log("totalletters: " + tL);
    console.log("totalWords: " + tW);
    console.log("Unique words: " + uniqueWords);
    console.log("Long words: " + lW);
    console.log("Average word length " + aWL);
    console.log("Number of sentences: " + nOS);
    console.log("Test Complexity: " + textComplex);
    console.log(wordObj);*/
    return {
        totalLetters: tL,
        totalWords: tW,
        uniqueWords: uniqueWords,
        longWords: lW,
        averageWordLength: aWL,
        numberOfSentences: nOS,
        textComplexity: textComplex,
        wordOccurrences: wordObj
    };
};
