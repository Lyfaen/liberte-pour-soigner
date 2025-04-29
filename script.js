// Tableau "deputes" généré à partir du CSV VoxPublic_liste-an.csv
const deputes = [
  {
    circonscription: "01 - 1ère circonscription",
    departement: "Ain",
    depute: "Jean DUPONT",
    email: "jean.dupont@assemblee-nationale.fr"
  },
  {
    circonscription: "01 - 2e circonscription",
    departement: "Ain",
    depute: "Marie MARTIN",
    email: "marie.martin@assemblee-nationale.fr"
  },
  {
    circonscription: "02 - 1ère circonscription",
    departement: "Aisne",
    depute: "Pierre DURAND",
    email: "pierre.durand@assemblee-nationale.fr"
  },
  {
    circonscription: "02 - 2e circonscription",
    departement: "Aisne",
    depute: "Sophie LEROY",
    email: "sophie.leroy@assemblee-nationale.fr"
  }
  // ... Insérez ici toutes les autres entrées converties depuis le CSV.
];

// Remplissage du menu déroulant
const selectEl = document.getElementById("circoSelect");
const sendBtn = document.getElementById("sendMailBtn");

// Ajoute une option pour chaque entrée
deputes.forEach(dep => {
  if (dep.circonscription && dep.depute && dep.departement && dep.email) {
    const option = document.createElement("option");
    // L'option affiche: "Circonscription - Député (Département)"
    option.value = dep.email; // Adresse email utilisée pour l'envoi du mail
    option.textContent = `${dep.circonscription} - ${dep.depute} (${dep.departement})`;
    selectEl.appendChild(option);
  }
});

// Active le bouton quand une option est sélectionnée
selectEl.addEventListener("change", () => {
  sendBtn.disabled = (selectEl.value === "");
});

// Lorsqu'on clique sur le bouton, ouvre le client mail avec le mail pré-rempli
sendBtn.addEventListener("click", () => {
  const email = selectEl.value;
  if (!email) return;
  const subject = encodeURIComponent("Contre la limitation de l'installation des médecins");
  const body = encodeURIComponent(
    "Madame, Monsieur le Député,\n\n" +
    "Je vous écris pour exprimer mon opposition à la nouvelle loi Garot limitant l'installation des médecins. " +
    "Cette mesure risque d'aggraver l'accès aux soins dans notre circonscription, qui est considérée en grande partie comme surdotée.\n\n" +
    "Merci de défendre l'accès aux soins pour nous.\n\n" +
    "Cordialement."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});
