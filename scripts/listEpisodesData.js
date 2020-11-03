async function listEpisodesData() {
  const respose = await fetch(`https://breakingbadapi.com/api/episodes`);
  const data = await respose.json();
  return data.map(({ title, air_date, season, episode }) => {
    let card = document.createElement("li");

    card.innerHTML = `
        <ul class="episode-card">
          <li>${title}</li>
          <li>Air Date: ${air_date}</li>
          <li>Season: ${season} - Episode: ${episode}</li>
        </ul>
        `;

    document.getElementById("episodes").appendChild(card);
  });
}
