async function listCharactersData() {
  const respose = await fetch(`https://www.breakingbadapi.com/api/characters/`);
  const data = await respose.json();
  return data.map(({ name, nickname, status, birthday, portrayed, img }) => {
    let card = document.createElement("li");

    card.innerHTML = `
      <ul class="character-card">
        <li>Name: ${name}</li>
        <li>Nickname: ${nickname}</li>
        <li>Portrayed: ${portrayed}</li>
        <li>Birthday: ${birthday}</li>
        <li>Status: ${status}</li>
        <li><img src="${img}"/></li>
      </ul>
    `;

    document.getElementById("characters").appendChild(card);
  });
}
