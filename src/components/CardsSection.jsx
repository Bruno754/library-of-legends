import ChampionCard from "./ChampionCard";

function CardsSection({ champions }) {
  return (
    <div className="w-full p-10">
      <div className="gap-[35px] gap-y-[50px] flex flex-row flex-wrap justify-center">
        {champions.map((champ) => {
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
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsSection;
