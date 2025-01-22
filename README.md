# Elevliste Bookmarklet

Dette projekt indeholder en bookmarklet til at udtrække fornavn og initialet af efternavnet for markerede elever fra en Moodle-deltagerliste.

## Sådan bruger du det

1. Gå til Moodle-deltagerlisten på den relevante kursusside.
2. Marker de ønskede elever ved at sætte kryds i deres checkbokse.
3. Træk knappen nedenfor til din bogmærkelinje for nem adgang.

### Bookmarklet

<p>
    <a href="javascript:(function()%7Bvar%20elever%3Ddocument.querySelectorAll(%22%23participants%20tbody%20tr%3Anot(.emptyrow)%22)%2CcopyText%3D%22%22%2CselectedCount%3D0%3Bfunction%20copyTextToClipboard(e)%7Bvar%20t%3Ddocument.createElement(%22textarea%22)%3Bt.value%3De%2Cdocument.body.appendChild(t)%2Ct.focus()%2Ct.select()%3Btry%7Bvar%20o%3Ddocument.execCommand(%22copy%22)%3Balert(%22Kopieringen%20af%20elevnavne%20%22%2B(o%3F%22lykkedes%22%3A%22fejlede%22))%7Dcatch(r)%7Balert(%22Oops%2C%20kunne%20ikke%20kopiere%22%2Cr)%7Ddocument.body.removeChild(t)%7Delever.forEach(e%3D%3E%7Bvar%20t%3De.querySelector('input%5Btype%3D%22checkbox%22%5D')%3Bif(t%26%26t.checked)%7Bvar%20o%2Cr%2Cc%2Cl%2Cn%3De.querySelector(%22th.c1%20a%20span%22).getAttribute(%22title%22).trim().split(%22%20%22)%3BcopyText%2B%3D%60%24%7Bn%5B0%5D%7D%20%24%7Bn%5Bn.length-1%5D%5B0%5D%7D.%60%2CselectedCount%2B%2B%7D%7D)%2CcopyText%3DcopyText.trim()%2C0%3D%3D%3DselectedCount%3Falert(%22Ingen%20elever%20er%20markeret.%20V%5Cxe6lg%20mindst%20%5Cxe9n%20elev%20for%20at%20forts%5Cxe6tte.%22)%3AcopyTextToClipboard(copyText)%7D)()" 
       style="display:inline-block;padding:10px 15px;font-size:16px;font-family:sans-serif;color:white;background-color:#007bff;border-radius:5px;text-decoration:none;" 
       title="Træk dette link til din bogmærkelinje">
       Udtræk brugerliste
    </a>
</p>

### Funktionalitet

- Udtrækker fornavnet og det første bogstav af efternavnet fra de markerede elever.
- Kopierer resultatet til udklipsholderen.
- Viser en advarsel, hvis ingen elever er markeret.

### Krav

- Moodle-deltagerlisten skal være synlig.
- Browseren skal understøtte JavaScript og bookmarklets.

## Sådan tilføjer du Bookmarklet manuelt

1. Kopiér koden nedenfor:
   ```javascript
   javascript:(function(){var elever=document.querySelectorAll("#participants tbody tr:not(.emptyrow)"),copyText="",selectedCount=0;function copyTextToClipboard(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.focus(),t.select();try{var o=document.execCommand("copy");alert("Kopieringen af elevnavne "+(o?"lykkedes":"fejlede"))}catch(r){alert("Oops, kunne ikke kopiere",r)}document.body.removeChild(t)}elever.forEach(e=>{var t=e.querySelector('input[type="checkbox"]');if(t&&t.checked){var n=e.querySelector("th.c1 a span").getAttribute("title").trim().split(" ");copyText+=`${n[0]} ${n[n.length-1][0]}.`,selectedCount++}}),copyText=copyText.trim(),0===selectedCount?alert("Ingen elever er markeret. Vælg mindst én elev for at fortsætte."):copyTextToClipboard(copyText)})();
