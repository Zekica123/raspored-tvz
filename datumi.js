const today = new Date(); // gets the current date and time
const day = today.getDay(); // 0 (nedjelja) - 6 (subota)
const dayNames = ["pon", "uto", "sri", "cet", "pet"]; // index 0 -> pon (ponedjeljak)

/**
 * Prikaži div-ove koji odgovaraju izlazu iz dayNames.
 * Ako je vikend (nedjelja ili subota), prikaži sve dane.
 */
function prikaziRaspored() {
  const allIds = dayNames; // ["pon","uto","sri","cet","pet"]

  // Vikend: prikaži sve
  if (day === 0 || day === 6) {
    allIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) el.style.display = "";
    });
    console.log("Vikend - prikazuju se svi dani");
    return;
  }

  // Radni dan: mapiraj getDay() (1..5) na index day-1 (0..4)
  const index = day - 1;
  const idToShow = dayNames[index];

  allIds.forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.display = (id === idToShow) ? "" : "none";
  });

  console.log(idToShow);
}

// Prikaži sve dane (poziva se pritiskom na gumb)
function prikaziSveDane() {
  dayNames.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "";
  });
  console.log("Prikazuju se svi dani (ručno).");
}

// Poveži inicijalni prikaz i gumb
window.addEventListener("load", () => {
  prikaziRaspored();

  const btn = document.getElementById("prikaziSveBtn");
  if (btn) {
    btn.addEventListener("click", prikaziSveDane);
  }
});

