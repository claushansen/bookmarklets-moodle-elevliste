var elever = $('#participants tbody tr:not(.emptyrow) th.c1');
var copyText = "";
for (var i = 0; i < elever.length; i++) {
    var newline = i < elever.length-1 ? "\n" : "";
    copyText += $(elever[i]).text() + newline;
};
copyTextToClipboard(copyText);
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'lykkedes' : 'Fejlede';
        alert('Kopieringen af elevliste ' + msg);
    } catch (err) {
        alert('Oops, unable to copy', err);
    }
    document.body.removeChild(textArea);
}
