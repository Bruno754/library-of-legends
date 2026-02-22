const URL =
  "https://ddragon.leagueoflegends.com/cdn/16.4.1/data/pt_BR/champion.json";

export async function getChampions() {
  const resp = await fetch(URL);
  const data = await resp.json();

  console.log(data);
  return Object.values(data.data);
}
