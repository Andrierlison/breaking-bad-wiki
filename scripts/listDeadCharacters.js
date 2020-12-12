async function listDeadCharacters() {
  const respose = await fetch(`https://www.breakingbadapi.com/api/deaths`);
  const data = await respose.json();
  return data.map(({ death, cause, responsible, last_words, season, episode}) => {
    let card = document.createElement("li");

    card.innerHTML = `
      <ul class="dead-characters-card">
       <li>${death}</li>
       <li>Cause: ${cause}</li>
       <li>Responsible: ${responsible}</li>
<li>Last words: ${last_words}</li>
<li>Season: ${season} Episode: ${episode}</li>
</ul>
    `;

    document.getElementById("dead-characters").appendChild(card);
  });
}
