
# 🌌 Solaris – Interaktivt Solsystem

Ett projekt där syftet är att bygga en interaktiv visualisering av solsystemet med HTML, CSS och JavaScript.  
Användaren kan klicka på en planet för att öppna ett informationsfönster med fakta hämtad från ett API.

---

## 🚀 Funktionalitet

- Visar alla planeter i solsystemet samt solen.
- Varje planet är klickbar.
- Data hämtas från ett externt API med `fetch()`.
- Ett overlay-fönster öppnas med:
  - Namn
  - Latinskt namn
  - Beskrivning
  - Omkrets
  - Avstånd från solen
  - Temperaturer (dag/natt)
  - Månar
  - Rotation & orbitalperiod
- Overlay kan stängas med kryss eller klick utanför rutan.

---

## 🛠 Tekniker som används

- **HTML**
- **CSS**
- **JavaScript**
- **Fetch API**
- **DOM-manipulation**
- **Event listeners**

---

## 🌍 API

All planetdata hämtas från API:  
`https://4a6l0o1px9.execute-api.eu-north-1.amazonaws.com/bodies`

