# Oefening 06 - Proefexamen

## Voorbereiding:
Clone de git-repository uit github en maak je eigen branch.
1. Kopieer de url via github naar je klembord:  
   ![Copy url](https://raw.githubusercontent.com/SyntraFSD-JS/ex-01/master/images/copy_github.png "Copy url to clipboard")

Gebruik de terminal uit VSCode 
(zorg dat je in de juiste folder, die waar je alle oefeningen opslaat, zit in VSCode)
 om de volgende commands uit te voeren.
(vervang `[naam]` door je eigen naam)

1. `git clone https://github.com/SyntraFSD-JS/ex-06.git ex-06`
2. `cd ex-06`
3. `git checkout -b [naam]`
4. `git push --set-upstream origin [naam]`

Push regelmatig de changes die je maakt naar github

1. Commit je changes:
   1. Druk `Ctrl-Shift-G` om de Source Control tab te openen
   2. Geef een beschrijving van de changes die je deed en duw `Ctrl-Enter`
2. Push je changes:
   1. Druk `Ctrl-Shift-P` om het Command Palette te openen
   2. Zoek naar `Git: Push` en druk op `Enter` om uit te voeren 
   
Pull regelmatig om opmerkingen of aanpassingen van mij binnen te halen
1. Druk `Ctrl-Shift-P` om het Command Palette te openen
2. Zoek naar `Git: Pull` en druk op `Enter` om uit te voeren 
     
## Structuur
De oefeningen bevinden zich in een aparte map met de naam `ex[oef. nummer]_[oef. naam]`
Daarin zitten alle bestanden die je nodig hebt om de oefening te maken, meestal is dit een `index.html` en een `script.js` bestand.
Het script bestand zal al gelinkt zijn aan het html bestand. Zie:
```html
<script src="script.js"></script>
```
Normaal moet je niet in het html bestand meer werken maar enkel in `script.js`.
Ook daar zal meestal al een basisstructuur aanwezig zijn waarbij in comments staat waar je zelf dingen moet aanvullen.

Om het resultaat van je oefening te bekijken open je het `index.html` bestand in chrome.
In deze module gebruiken we allemaal chrome zodat we allemaal hetzelfde resultaat hebben.

## Oefeningen:
### Oefening 06: Quizr
#### Doel:
Een simpele quiz spel met Juist/Fout vragen.

- Er zijn steeds 10 vragen die elk nieuw spel in een willekeurige volgorde worden getoond.
- De antwoorden (of ze al dan niet correct zijn) worden bijgehouden in:   
`<div class="result tag is-dark is-large">Vraag 01</div>`  
dit element heeft drie mogelijke standen:
  - nog niet beantwoord, met de class: `is-dark`
  - correct beantwoord, met de class: `is-success`
  - fout beantwoord, met de class: `is-danger`
- Het aantal correcte antwoorden word bijgehouden in:  
`<span id="total-correct">1</span>`
- De vraag wordt getoond in:  
   ```
   <div id="question" data-index="5">
     Een vraag...
   </div>
   ```  
   De index van de houdige vraag wordt bijgehouden in `data-index="0"`
- Antwoorden doe je door te klikken op:  
   `<a id="answer-true" class="answer button is-success is-medium">True</a>`  
   of  
   `<a id="answer-false" class="answer button is-danger is-medium">False</a>`
- Wanneer alle vragen beantwoord zijn wordt in plaats van een vraag het resultaat getoond.  
 Als er dan op de `#answer-true` knop wordt geklikt begint het spel opnieuw.
 
De oplossing staat in de map `ex-06_quizr/solution` open dit in je browser om te kijken hoe het 
programma hoort te werken.

Succes!!
  




   
      
