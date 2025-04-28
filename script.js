document.addEventListener("DOMContentLoaded", () => {
  const selectEl = document.getElementById("circoSelect");
  const sendBtn = document.getElementById("sendMailBtn");

  // Chargement du CSV avec PapaParse
  Papa.parse("VoxPublic_liste-an.csv", {
    download: true,
    header: true,
    complete: function(results) {
      // Filtrer les lignes valides (attend des colonnes : circonscription, departement, depute, email)
      const data = results.data.filter(row =>
        row.circonscription && row.departement && row.depute && row.email
      );
      // Pour chaque ligne, on ajoute une option dans le menu
      data.forEach(row => {
        const option = document.createElement("option");
        // Format de l'option : "Circonscription - Député (Département)"
        option.value = row.email; // L'adresse mail du député
        option.textContent = `${row.circonscription} - ${row.depute} (${row.departement})`;
        selectEl.appendChild(option);
      });
    },
    error: function(err) {
      console.error("Erreur lors du chargement du CSV :", err);
    }
  });

  // Active le bouton quand une option est sélectionnée
  selectEl.addEventListener("change", () => {
    sendBtn.disabled = (selectEl.value === "");
  });

  // Ouvrir l'application mail avec le mail pré-rempli
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


