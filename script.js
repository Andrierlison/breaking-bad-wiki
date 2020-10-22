const root = document.getElementById("root");

function getName() {
  return fetch(`https://www.breakingbadapi.com/api/characters/`)
    .then((respose) => respose.json())
    .then((data) =>
      data.map((data) => {
        let card = document.createElement("div");

        let listName = document.createElement("li");

        let listBirthday = document.createElement("li");

        let listPortrayed = document.createElement("li");

        let listStatus = document.createElement("li");

        let img = document.createElement("img");

        let status = document.createTextNode(`Status: ${data.status}`);

        let name = document.createTextNode(`Name: ${data.name}`);

        let birthday = document.createTextNode(`Birthday: ${data.birthday}`);

        let portrayed = document.createTextNode(`Portrayed: ${data.portrayed}`);

        listStatus.appendChild(status);

        listBirthday.appendChild(birthday);

        listPortrayed.appendChild(portrayed);

        listName.appendChild(name);

        img.setAttribute("src", `${data.img}`);

        card.appendChild(listName);
        card.appendChild(listPortrayed);
        card.appendChild(listBirthday);
        card.appendChild(listStatus);
        card.appendChild(img);

        root.appendChild(card);
      })
    );
}
getName();
