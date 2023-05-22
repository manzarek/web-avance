import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Détail d'un personnage");
  }

  async getHtml() {

    async function getData(url) {
      const response = await fetch(url);
      return response.json();
    }

    const data = await getData("/static/js/views/data.json");
    const article = data.find((item) => item.id === this.params.id);

    let details = 
      "<div class='details'>" +
        "<h1>" + article.name + "</h1>" +
        `<img src="${article.image}" alt="" />` +
        "<div>" +
          "<p>" + "Espèce: " + article.species + "</p>" +
          "<p>" + "Genre: " + article.gender + "</p>" +
          "<p>" + "Maison: " + article.house + "</p>" +
          "<p>" + "Année de naissance: " + article.yearOfBirth + "</p>" +
          "<p>" + "Acteur: " + article.actor + "</p>" +
        "</div>" +
      "</div>";
    return (details);
  }
}
