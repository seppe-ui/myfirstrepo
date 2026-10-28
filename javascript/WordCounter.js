function telWoorden(tekst) {
    const woorden = tekst
        .replaceAll('"', "")
        .replaceAll("!", "")
        .replaceAll("-", "")
        .replaceAll("'", "")
        .replaceAll(":", "")
        .replaceAll(",", "")
        .replaceAll('.', "")
        .replaceAll("`", "")
        .replaceAll("'", "")
        .replaceAll('"', "")
        .split(" ")
        .split("d");

    console.log(woorden)
        
        
    const telling = {};

    for (const woord of woorden) {
        telling[woord] = (telling[woord] || 0) + 1;
    }

    return telling;
}

const tekst = `"Dat is het wachtwoord: 'WACHTWOORD 123'!", riep de Federale agent. Dus ik vluchtte.`;

console.log(telWoorden(tekst.toLowerCase()));