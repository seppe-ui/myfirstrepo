
function telWoorden(tekst) {

    //dit zijn variabellen
    let punten = 0;
    const letters = tekst.split('');

    console.log(letters)

    //dit zijn de variabellen
    let lijst1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let lijst2 = ["d", "g"];
    let lijst3 = ["b", "c", "m", "p"];
    let lijst4 = ["f", "h", "v", "w", "y"];
    let lijst5 = ["k"];
    let lijst6 = ["j", "x"];
    let lijst7 = ["q", "z"];

    //dit forloop telt alle punten up
    for (let p = 0; p < letters.length; p++) { 
        for (let i = 0; i < lijst1.length; i++) { if (letters[p] == lijst1[i]) { punten += 1; } }
        for (let i = 0; i < lijst2.length; i++) { if (letters[p] == lijst2[i]) { punten += 2; } }
        for (let i = 0; i < lijst3.length; i++) { if (letters[p] == lijst3[i]) { punten += 3; } }
        for (let i = 0; i < lijst4.length; i++) { if (letters[p] == lijst4[i]) { punten += 4; } }
        for (let i = 0; i < lijst5.length; i++) { if (letters[p] == lijst5[i]) { punten += 5; } }
        for (let i = 0; i < lijst6.length; i++) { if (letters[p] == lijst6[i]) { punten += 8;  } }
        for (let i = 0; i < lijst7.length; i++) { if (letters[p] == lijst7[i]) { punten += 10;  } }
    }
    //dit toont alle punten
    console.log(punten)
    
}
//dit is de tekst
const tekst = "Bagage";
//dit roept de methode op om de punten de geven
console.log(telWoorden(tekst.toLowerCase()));
