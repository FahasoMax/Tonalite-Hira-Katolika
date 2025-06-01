
// Liste des fichiers JSON à charger
const jsonFiles = [
  'ankalazao_ny_tompo.json',
  'antsao_ny_tompo.json',
  'fihirana_dera.json',
  'chansons.json',
  'fihirana_hasina.json',
  'fihirana_vaovao.json',
  'karine_dera.json',
  'vavaka_sy_hira.json',
];

let chansonsData = [];

// Fonction pour charger et fusionner tous les fichiers JSON
async function loadAllJson(files, prefix = '') {
  const promises = files.map(file =>
    fetch(prefix + file)
      .then(res => {
        if (!res.ok) throw new Error(`Erreur lors du chargement de ${file}`);
        return res.json();
      })
      .catch(err => {
        console.error(err);
        return []; // Si erreur, on retourne un tableau vide
      })
  );
  const results = await Promise.all(promises);
  return results.flat(); // Fusionner tous les tableaux
}

function afficherChansons(chansons) {
  const container = document.getElementById("liste-chansons");
  container.innerHTML = "";

  chansons.forEach(chanson => {
    const { title, page, Ambony = "", Antonony = "", Ambany = "" } = chanson;

    // Affichage conditionnel des tonalités
    let tonaliteHtml = "";
    if (Ambony) tonaliteHtml += `<p><strong>Ambony :</strong> <span class="tonalite">${Ambony}</span></p>`;
    if (Antonony) tonaliteHtml += `<p><strong>Antonony :</strong> <span class="tonalite">${Antonony}</span></p>`;
    if (Ambany) tonaliteHtml += `<p><strong>Ambany :</strong> <span class="tonalite">${Ambany}</span></p>`;

    const div = document.createElement("div");
    div.className = "chanson";
    div.innerHTML = `
      <h2>✝ ${title}</h2>
      <p><strong>Page :</strong> ${page ?? ""}</p>
      ${tonaliteHtml}
    `;
    container.appendChild(div);
  });
}

function melangerArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Chargement initial
loadAllJson(jsonFiles)
  .then(data => {
    chansonsData = data;
    const chansonsAleatoires = melangerArray([...chansonsData]).slice(0, 10);
    afficherChansons(chansonsAleatoires);
  })
  .catch(error => console.error("Erreur chargement JSON :", error));

// Recherche en direct
document.getElementById("searchInput").addEventListener("input", e => {
  const valeur = e.target.value.toLowerCase();
  const resultats = chansonsData.filter(chanson =>
    chanson.title && chanson.title.toLowerCase().includes(valeur)
  );
  afficherChansons(resultats);
});



/*
fetch("fihirana_hasina.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("liste-chansons");

    data.forEach(chanson => {
      const title = chanson.title;
      const page = chanson.page;
      var tonaliteHtml = "";

      // Vérifie et crée l'affichage de la tonalité pour chaque chanson
      if (chanson.Ambony) tonaliteHtml += `<p><strong>Ambony :</strong> ${chanson.Ambony}</p>`;
      if (chanson.Antonony) tonaliteHtml += `<p><strong>Antonony :</strong> ${chanson.Antonony}</p>`;
      if (chanson.Ambany) tonaliteHtml += `<p><strong>Ambany :</strong> ${chanson.Ambany}</p>`;

      const div = document.createElement("div");
      div.className = "chanson";

      div.innerHTML = `<h2>${title}</h2><p><strong>Page :</strong> ${page}</p>${tonaliteHtml}`;

      container.appendChild(div);
    });
  });


  // script modified

  var chansonsData = [];

function afficherChansons(chansons) {
  const container = document.getElementById("liste-chansons");
  container.innerHTML = "";

  chansons.forEach(chanson => {
    const { title, page, Ambony, Antonony, Ambany } = chanson;

    const tonaliteHtml = `
    <p><strong>Ambony :</strong> <span class="tonalite">${Ambony}</span></p>
    <p><strong>Antonony :</strong> <span class="tonalite">${Antonony}</span></p>
    <p><strong>Ambany :</strong> <span class="tonalite">${Ambany}</span></p>
  `;
  



    const div = document.createElement("div");
    div.className = "chanson";
    div.innerHTML = `
      <h2>${title}</h2>
      <p><strong>Page :</strong> ${page}</p>
      ${tonaliteHtml}
    `;

    container.appendChild(div);
  });
}

function melangerArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

fetch("fihirana_hasina.json")
  .then(response => response.json())
  .then(data => {
    chansonsData = data;

    const chansonsAleatoires = melangerArray([...data]).slice(0, 10);
    afficherChansons(chansonsAleatoires);
  })
  .catch(error => console.error("Erreur chargement JSON :", error));

document.getElementById("searchInput").addEventListener("input", e => {
  const valeur = e.target.value.toLowerCase();

  const resultats = chansonsData.filter(chanson =>
    chanson.title.toLowerCase().includes(valeur)
  );

  afficherChansons(resultats);
});



*/


//croix discret

div.innerHTML = `
  <h2>✝ ${title}</h2>
  <p><strong>Page :</strong> ${page}</p>
  ${tonaliteHtml}`;
