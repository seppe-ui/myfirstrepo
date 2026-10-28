let isbn = "3-598-21508-8"
let splitisbn = isbn.split("")
let isbngetallen = [];

splitisbn.forEach(element =>
{
    if (element !== '-') {
        if (element === "x" || element === "X") {
            isbngetallen.push(10)
        }
        else {
            isbngetallen.push(+element);
        }
    }


})
//(d₁ x 10 + d₂ x 9 + d₃ x 8 + d₄ x 7 + d₅ x 6 + d₆ x 5 + d₇ x 4 + d₈ x 3 + d₉ x 2 + d₁₀ x 1) mod 11 == 0
console.log(isbngetallen);

let formuleUitkomst = 0;

for (let i = 0; i < isbngetallen.length ; i++) {
    formuleUitkomst += isbngetallen[i] * (10 - i)
}
formuleUitkomst = formuleUitkomst % 11;

if (formuleUitkomst === 0) {
    console.log("Dit is een correcte ISBN waarde")
} else { console.log("Dit is geen correcte ISBN waarde") }
