document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("circoSelect");
  const sendBtn = document.getElementById("sendMailBtn");

  // Charger le CSV avec PapaParse
  Papa.parse("VoxPublic_liste-an.csv", {
    download: true,
    header: true,
    transformHeader: header => header.trim().toLowerCase(),
    complete: function(results) {
      // Vérifier si des données ont été chargées
      if (!results.data || results.data.length === 0) {
        console.error("Aucune donnée trouvée dans le CSV.");
        return;
      }
      // Filtrer pour ne garder que les lignes valides
      const data = results.data.filter(row =>
        row.circonscription && row.departement && row.depute && row.email
      );
      // Ajouter une option pour chaque circonscription
      data.forEach(row => {
        const option = document.createElement("option");
        // Formater l'option : "Circonscription - Député (Département)"
        option.value = row.email; // L'adresse mail
        option.textContent = `${row.circonscription} - ${row.depute} (${row.departement})`;
        selectEl.appendChild(option);
      });
      console.log("Menu déroulant rempli avec", data.length, "entrées.");
    },
    error: function(err) {
      console.error("Erreur lors du chargement du CSV :", err);
    }
  });

  // Activer le bouton quand une option est sélectionnée
  selectEl.addEventListener("change", () => {
    sendBtn.disabled = (selectEl.value === "");
  });

  // Lorsque le bouton est cliqué, ouvrir l'application mail avec le mail prérempli
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
});
