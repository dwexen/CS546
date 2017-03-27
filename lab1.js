/*
 *Matthew Colozzo
 *lab1.js
 *"I pledge my honor that I have abided by the Stevens Honor System."
 */

//console.log(sumOfSquares(-5, 10, 3));

function sumOfSquares(num1, num2, num3)
{
    if(isNaN(num1) || isNaN(num2) || isNaN(num3))
    {
        throw "Invalid parameter enter 3 numbers";
    }
    else
    {
        return((num1*num1)+(num2*num2)+(num3*num3));
    }
}
//console.log(sumOfSquares(1, 4, 10))
//onsole.log(sumOfSquares(-7, 8, 121))
try {
        cupsOfCoffee(-5) // => throws
    } catch (e) {
        console.log(e);
    }
//console.log(sumOfSquares(1,3,5));
/*sayHelloTo("Monica", "Razak", "Ms.");
cupsOfCoffee(3);
console.log(occurrencesOfSubstring("Hellllllllo class", "ll"));
console.log(randomizeSentences("Hello, world! I am a paragraph. You can tell that I am a paragraph because there are multiple sentences that are split up by punctuation marks. Grammar can be funny, so I will only put in paragraphs with periods, exclamation marks, and question marks -- no quotations."));
*/
//sayHelloTo("matt", "Colozzo", "Esq");
//sayHelloTo("matt", "Co");
//sayHelloTo(null);
//sayHelloTo("matt");
function sayHelloTo(firstName,lastName,title)
{
    if(firstName == null && lastName == null && title == null)
    {
        throw "enter at least 1 string as a parameter";
    }
    else
    {
        if(firstName != null &&  lastName != null && title != null)
        {
            if(typeof firstName === 'string' && typeof lastName == 'string' && typeof title === 'string')
            {
                console.log(`Hello, ${title} ${firstName} ${lastName}! Have a good evening!`);
            }
            else
            {
                throw "enter only strings";
            }
        }
        else if(firstName != null && lastName != null)
        {
            if(typeof firstName === 'string'  && typeof lastName === 'string')
            {
                console.log(`Hello, ${firstName} ${lastName}. I hope you are having a good day!`);
            }
            else
            {
                throw "enter only strings";
            }
        }
        else
        {
            if(typeof firstName === 'string')
            {
                console.log(`Hello, ${firstName}!`);
            }
            else
            {
                throw "enter a string";
            }
        }
    }
}

//cupsOfCoffee(5);
//cupsOfCoffee("turtle");
function cupsOfCoffee(howManyCups)
{
    if(isNaN(howManyCups))
    {
        throw "Enter a number";
    }
    else
    {
        for(let i = howManyCups; i > 0; i--)
        {
            if(i == 1)
            {
                console.log("\n\n1 cup of coffee on the desk! 1 cup of coffee!");
                console.log("Pick it up, drink the cup, no more coffee left on the desk!");
                break;
            }
            if(i == 2)
            {
                console.log("\n\n2 cups of coffee on the desk! 2 cups of coffee!");
                console.log("Pick one up, drink the cup, 1 cup of coffee left on the desk!");
            }
            else
            {
                let oneless = i - 1;
                console.log(`\n\n${i} cups of coffee on the desk! ${i} cups of coffee!`);
                console.log(`Pick one up, drink the cup, ${oneless} cups of coffee on the desk`);
            }
        }
    }
}

//console.log( occurrencesOfSubstring("helllllllo", "ll"))
function occurrencesOfSubstring(fullString, substring)
{
    if(typeof fullString === 'string' && typeof substring === 'string')
    {
        if(substring.length <= 0 || fullString.length <= 0)
        {
            throw "enter larger parameters";
        }
        let occurences = 0;
        let pos = 0;
        while(true)
        {
            pos = fullString.indexOf(substring, pos);
            if(pos >= 0)
            {
                ++occurences;
                pos++;
            }
            else 
            {
                break;
            }
        }
        //console.log(occurences);
        if(occurences > 0)
        {
            return occurences;
        }
        else 
        {
            throw "substring not found";
        }
    }
    else
    {
        throw "Enter two strings";
    }
}


//let para = "Hello, world! I am a paragraph. You can tell I am a paragraph because there are multiple sentences that are split up by punctuation marks. This is another sentence? Testing with more sentences. I love more sentences. They make me feel whole.";

//console.log(randomizeSentences(para));
function randomizeSentences(paragraph)
{
    let p = paragraph;
    if(typeof paragraph === 'string')
    {
        let npara = [];
        for(let j = 0; j < p.length; j++)
        {
            for(let k = 0; k < p.length; k++)
            {
                if(p.charAt(k) == "." || p.charAt(k) == "?" || p.charAt(k) == "!")
                {
                    npara.push(p.substring(j,k+1));
                    j = k+1;
                    if(p[j] == " ")
                    {
                        j++
                    }
                }
            }
        }
        for(let i = 0; i < npara.length; i++)
        {
            let newInd = Math.floor(Math.random() * (npara.length - 1) + 1);
            let temp = npara[i];
            npara[i]= npara[newInd];
            npara[newInd] = temp;
        }
        return npara.join(" ");
    }
    else
    {
        throw "enter a paragraph as a string";
    }
}



 console.log("Testing sumOfSquares\n");
    console.log(sumOfSquares(1, 4, 10)); //117
    console.log(sumOfSquares(-7, 8, 121)); //14754
    console.log("\n");
    console.log("Testing sayHelloTo\n");
    sayHelloTo("Bill"); // logs: Hello, Bill! 
    sayHelloTo("Bill", "Pond"); //logs: Hello, Bill Pond. I hope you are having a good day!
    sayHelloTo("Bill", "Pond", "Mr."); // logs: Hello, Mr. Bill Pond! Have a good evening!
    console.log("\n");
    console.log("Testing cupsOfCoffee\n");
    try {
        cupsOfCoffee(-5) // => throws
    } catch (e) {
        console.log(e);
    }

    try {
        cupsOfCoffee() // => throws
    } catch (e) {
        console.log(e);
    }

    cupsOfCoffee(1)
    cupsOfCoffee(2)
    cupsOfCoffee(4)
    console.log("\n");
    

    console.log("Testing occurrencesOfSubString\n");
    let occurrenceFn = occurrencesOfSubstring;

    let occurrences = 0;
    try {
        occurrences = occurrenceFn(); // => throws
    } catch (e) {
        console.log(e);
    }


    try {
        occurrences = occurrenceFn("hello world"); // => throws
    } catch (e) {
        console.log(e);
    }

    console.log(occurrences = occurrenceFn("hello world", "o"));//  => 2
    console.log(occurrences = occurrenceFn("Helllllllo, class!", "ll"));//  => 6

    console.log("\n");
    console.log("Testing randomizeSentences\n");
    let para = "Hello, world! I am a paragraph. You can tell I am a paragraph because there are multiple sentences that are split up by punctuation marks. This is another sentence? Testing with more sentences. I love more sentences. They make me feel whole.";

    console.log(randomizeSentences(para));
    try {
        randomizeSentences()
    } catch(e)
    {
        console.log(e);
    }
    try {
        randomizeSentences(2)
    } catch(e)
    {
        console.log(e);
    }    //cupsOfCoffee(2)