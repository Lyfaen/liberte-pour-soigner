// Fonction de parsing simple d'un CSV
function parseCSV(text) {
  const lines = text.split("\n").filter(line => line.trim() !== '');
  const headers = lines[0].split(",").map(header => header.trim().toLowerCase());
  const result = [];
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split(",").map(value => value.trim());
    const obj = {};
    headers.forEach((header, index) => {
      let val = values[index] || "";
      // Enlever d'éventuelles guillemets
      val = val.replace(/^"(.+(?="$))"$/, "$1");
      obj[header] = val;
    });
    result.push(obj);
  }
  return result;
}

// Remplit le menu déroulant avec les circonscriptions
function populateDropdown(data) {
  const select = document.getElementById("circonscriptionSelect");
  // Pour chaque entrée, on ajoute une option au menu.
  // Affichage sous la forme : [Département] Circonscription - Député
  data.forEach(item => {
    // On vérifie que les champs essentiels existent
    if (item.circonscription && item.departement && item.depute && item.email) {
      const option = document.createElement("option");
      option.value = item.email; // L'adresse mail du député
      option.textContent = `[${item.departement}] ${item.circonscription} - ${item.depute}`;
      select.appendChild(option);
    }
  });
}

// Activation du bouton dès qu'une option est sélectionnée
document.getElementById("circonscriptionSelect").addEventListener("change", function() {
  const btn = document.getElementById("sendMailButton");
  btn.disabled = this.value === "";
});

// Quand on clique sur le bouton, ouvrir le client mail avec le mail pré-rempli
document.getElementById("sendMailButton").addEventListener("click", function() {
  const select = document.getElementById("circonscriptionSelect");
  const email = select.value;
  if (!email) return;
  const subject = encodeURIComponent("Contre la limitation de l'installation des médecins");
  const body = encodeURIComponent(
    "Madame, Monsieur le Député,\n\n" +
    "Je vous écris pour exprimer mon opposition à la nouvelle loi qui limite la liberté d'installation des médecins. " +
    "Cette mesure risque d'aggraver l'accès aux soins dans notre circonscription.\n\n" +
    "Merci de défendre l'accès aux soins pour tous.\n\n" +
    "Cordialement."
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

// Charger le fichier CSV et peupler le menu déroulant
fetch("VoxPublic_liste-an.csv")
  .then(response => response.text())
  .then(text => {
    const data = parseCSV(text);
    populateDropdown(data);
  })
  .catch(error => {
    console.error("Erreur lors du chargement du CSV :", error);
  });
