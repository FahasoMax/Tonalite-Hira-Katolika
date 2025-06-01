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




//croix discret

div.innerHTML = `
  <h2>✝ ${title}</h2>
  <p><strong>Page :</strong> ${page}</p>
  ${tonaliteHtml}`;
