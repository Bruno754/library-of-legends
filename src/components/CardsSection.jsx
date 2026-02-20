import ChampionCard from "./ChampionCard";

function CardsSection({ champions }) {
  return (
    <div className="w-full p-10">
      <div className="grid gap-6 grid-cols-5">
        {champions.map((champ) => {
          return (
            <ChampionCard
              key={champ.key}
              champName={champ.name}
              image={champ.image.full}
              id={champ.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardsSection;
