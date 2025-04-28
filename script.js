// Voici le tableau "deputes" généré à partir du CSV VoxPublic_liste-an.csv.
// Chaque objet a les propriétés : 
//    - circonscription (exemple "01 - 1ère circonscription")
//    - departement (exemple "Ain")
//    - depute (nom complet du député)
//    - email (l'adresse email officielle du député)
//
// IMPORTANT : Assure-toi que cette conversion est complète (ici, j'en fournis quelques exemples).
const deputes = [
  { circonscription: "01 - 1ère circonscription", departement: "Ain", depute: "Jean DUPONT", email: "jean.dupont@assemblee-nationale.fr" },
  { circonscription: "01 - 2e circonscription", departement: "Ain", depute: "Marie MARTIN", email: "marie.martin@assemblee-nationale.fr" },
  { circonscription: "02 - 1ère circonscription", departement: "Aisne", depute: "Pierre DURAND", email: "pierre.durand@assemblee-nationale.fr" },
  // ... INTÈGREZ ICI TOUTES LES AUTRES LIGNES DU CSV CONVERTIES
];

// On suppose que le tableau "deputes" contient désormais toutes les entrées du CSV.

// Remplissage du menu déroulant
const selectEl = document.getElementById("circoSelect");
const sendBtn = document.getElementById("sendMailBtn");

deputes.forEach(dep => {
  // Vérification que toutes les données sont présentes
  if (dep.circonscription && dep.departement && dep.depute && dep.email) {
    const option = document.createElement("option");
    option.value = dep.email; // L'adresse mail du député
    // Format de l'option : "Circonscription - Député (Département)"
    option.textContent = `${dep.circonscription} - ${dep.depute} (${dep.departement})`;
    selectEl.appendChild(option);
  }
});

// Active le bouton dès qu'une option est sélectionnée
selectEl.addEventListener("change", () => {
  sendBtn.disabled = (selectEl.value === "");
});

// En cas de clic sur le bouton, ouvrir le client mail avec le mail prérempli
sendBtn.addEventListener("click", () => {
  const email = selectEl.value;
  if (!email) return;
  const subject = encodeURIComponent("Contre la limitation de l'installation des médecins");
  const body = encodeURIComponent(
    "Madame, Monsieur le Député,\n\n" +
    "Je vous écris pour exprimer mon opposition à la nouvelle loi limitant l'installation des médecins. " +
    "Cette mesure risque d'aggraver l'accès aux soins dans notre circonscription.\n\n" +
    "Merci de défendre l'accès aux soins pour tous.\n\n" +
    "Cordialement."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
