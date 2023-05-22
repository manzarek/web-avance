import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Harry Potter : spécial personnages");
  }

  async getHtml() {

    async function getData(url) {
      const response = await fetch(url);
      console.log(response);
      return response.json();
    }

    const data = await getData("/static/js/views/data.json");

    let listPosts = "<div class='main-content'>";
    listPosts += "<table>";
    for (let i in data) {
      listPosts +=
        "<tr><td><a class='cell-content' href='/details/" + data[i]["id"] + "' data-link>" +
        '<p>' + data[i]["name"] + '</p>';

        if (data[i]["image"] != "") {
          listPosts +=
            '<img src="' + data[i]["image"] + '" alt="" />';
        }

        listPosts += "</a></td>";
        listPosts += "</tr>";
    }
    listPosts += "</table>";
    listPosts += "</div>";

    return listPosts;
  }
}
