// Find alle rækker i deltagerlisten, der ikke er tomme
var elever = document.querySelectorAll('#participants tbody tr:not(.emptyrow)');

// Initialiser en tekststreng til at gemme alle elevnavne og en tæller
var copyText = "";
var selectedCount = 0;

// Loop gennem hver række og udtræk navne for markerede elever
elever.forEach((row) => {
    // Find checkboksen i rækken
    var checkbox = row.querySelector('input[type="checkbox"]');
    
    // Tjek, om checkboksen er markeret
    if (checkbox && checkbox.checked) {
        // Find <a> i kolonnen med elevnavnet
        var linkElement = row.querySelector('th.c1 a');

        // Fjern alle underliggende elementer som <img> eller <span> (initialer)
        var fuldtNavn = Array.from(linkElement.childNodes)
            .filter(node => node.nodeType === Node.TEXT_NODE) // Kun tekstnoder
            .map(node => node.textContent.trim()) // Trim hver tekst
            .join(""); // Kombiner al tekst til en enkelt streng

        // Split navnet i dele
        var navneDel = fuldtNavn.split(' ');
        var fornavn = navneDel[0]; // Første del er fornavnet
        var efternavnInitial = navneDel[navneDel.length - 1][0]; // Første bogstav af det sidste navn

        // Kombiner fornavn og første bogstav af det sidste navn
        var navnMedInitial = `${fornavn} ${efternavnInitial}.`;

        // Tilføj navnet til teksten
        copyText += navnMedInitial + "\n";
        // Inkrementer tælleren
        selectedCount++;
    }
});

// Trim eventuelle ekstra nye linjer
copyText = copyText.trim();

// Hvis ingen elever er markeret, vis en advarsel
if (selectedCount === 0) {
    alert('Ingen elever er markeret. Vælg mindst én elev for at fortsætte.');
} else {
    // Kopier resultatet til udklipsholderen
    copyTextToClipboard(copyText);
}

// Funktion til at kopiere tekst til udklipsholderen
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand("copy");
        var msg = successful ? "lykkedes" : "fejlede";
        alert("Kopieringen af elevnavne " + msg);
    } catch (err) {
        alert("Oops, kunne ikke kopiere", err);
    }
    document.body.removeChild(textArea);
}
