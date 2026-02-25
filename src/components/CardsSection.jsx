/* eslint-disable react/prop-types */
import { useState } from "react";
import ChampionCard from "./ChampionCard";
import ChampionDetails from "./ChampionDetails";

function CardsSection({ champions }) {
  //Esse estado é para armazenar qual card foi selecionado, para enviar para o ChampionDetails
  const [selectedCard, setSelectedCard] = useState(null);
  //Esse estado foi criado para armazenar o que o usuario esta buscando
  const [search, setSearch] = useState("");
  //Esse estado foi criado para armazenar o filtro na busca
  const [filter, setFilter] = useState("");

  const lowerSearch = search.toLowerCase(); //Tirado do Loop do filter

  const filteredChamps = champions.filter((champ) => {
    const matchesName = champ.name.toLowerCase().includes(lowerSearch);
    const matchesFilter = filter === "" || champ.tags.includes(filter); //filteredChamps recebe uma lista filtrada | Caso o filtro for vazio retorna a lista inteira
    return matchesName && matchesFilter;
  });

  return (
    <div id="cards" className="w-full ">
      <div className="w-full h-[120px] flex flex-row items-center justify-center mb-[50px] bg-black/50 backdrop-blur-md">
        <input
          type="text"
          className="p-3 w-[450px] rounded-xl bg-zinc-800 text-zinc-200 placeholder:text-zinc-200"
          placeholder="Nome do campeão"
          onChange={(event) => setSearch(event.target.value)}
        />
        <select
          className="p-3 rounded-xl bg-zinc-800 text-zinc-200 ml-4"
          onChange={(event) => setFilter(event.target.value)}
          name="filter"
          id="filter"
        >
          <option value="" selected>
            Sem filtro
          </option>
          <option value="Mage">Mage</option>
          <option value="Assassin">Assassin</option>
          <option value="Fighter">Fighter</option>
          <option value="Tank">Tank</option>
          <option value="Support">Support</option>
          <option value="Marksman">Marksman</option>
        </select>
      </div>
      <div className="gap-[35px] gap-y-[50px] flex flex-row flex-wrap justify-center">
        {filteredChamps.map((champ) => {
          //Carrega a lista filtrada
          return (
            <ChampionCard
              key={champ.key}
              champName={champ.name}
              id={champ.id}
              champTitle={champ.title}
              difficulty={champ.info.difficulty}
              attack={champ.info.attack}
              defense={champ.info.defense}
              magic={champ.info.magic}
              lore={champ.blurb}
              tags={champ.tags}
              onSelect={setSelectedCard}
            />
          );
        })}
      </div>
      {selectedCard && (
        <ChampionDetails
          onClose={() => {
            setSelectedCard(null);
          }}
          data={selectedCard}
        />
      )}
    </div>
  );
}

export default CardsSection;
