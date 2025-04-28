// Liste simplifiée exemple : (je vais continuer la liste complète si tu veux)
const deputes = [
  { circo: "01 - 1ère circonscription", email: "depute1@assemblee-nationale.fr" },
  { circo: "01 - 2e circonscription", email: "depute2@assemblee-nationale.fr" },
  { circo: "02 - 1ère circonscription", email: "depute3@assemblee-nationale.fr" },
  // ... ➔ Ici tu mets toutes les autres entrées
];

const select = document.getElementById('depute-select');
const button = document.getElementById('email-button');

// Remplir le menu déroulant
deputes.forEach(dep => {
  const option = document.createElement('option');
  option.value = dep.email;
  option.textContent = dep.circo;
  select.appendChild(option);
});

// Gérer l'activation du bouton
select.addEventListener('change', () => {
  button.disabled = !select.value;
});

// Gérer le clic sur le bouton
button.addEventListener('click', () => {
  const email = select.value;
  const subject = encodeURIComponent("Pour la liberté d'installation des médecins");
  const body = encodeURIComponent(
    `Madame, Monsieur le Député,\n\nJe vous écris pour exprimer mon opposition à la loi limitant la liberté d'installation des médecins...\n\nRespectueusement,`
  );
  window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
});

