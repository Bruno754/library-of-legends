import { data } from "autoprefixer";
import { Swords, Shield, Sparkles, Star } from "lucide-react";

function ChampionCard({
  champName,
  champTitle,
  difficulty,
  attack,
  defense,
  magic,
  id,
  lore,
  tags,
  onSelect,
}) {
  const imageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;
  const iconURL = `https://ddragon.leagueoflegends.com/cdn/16.4.1/img/champion/${id}.png`;

  const data = {
    name: champName,
    image: imageURL,
    title: champTitle,
    difficulty: difficulty,
    attack: attack,
    defense: defense,
    magic: magic,
    id: id,
    lore: lore,
    tags: tags,
  };

  return (
    <div className="group h-[620px] w-[380px] [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className="absolute inset-0 bg-white shadow-2xl [backface-visibility:hidden]">
          <img
            className="h-[75%] w-full object-cover object-[75%]"
            src={imageURL}
            alt={champName}
          />
          <div className="flex flex-col text-center items-center justify-center h-[25%] bg-gradient-to-b from-[#0E2A3D] to-[#08141F] p-[12px]">
            <h1 className="font-ptsans font-bold italic text-4xl text-white uppercase">
              {champName}
            </h1>
            <span className="text-slate-300 font-ptsans text-lg italic">
              {champTitle}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full bg-[#08141F] px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center gap-5">
            <img className="" src={iconURL} alt="" />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-bold text-white">{champName}</h2>
              <div className="flex">
                {tags.map((tag) => (
                  <span key={tag} className="px-3 text-slate-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex flex-row gap-5">
              <span className="flex flex-row gap-2">
                <Star className="text-yellow-400" />
                <p>{difficulty}</p>
              </span>
              <span className="flex flex-row gap-2">
                <Swords className="text-blue-400" />
                <p>{attack}</p>
              </span>
              <span className="flex flex-row gap-2">
                <Shield className="text-green-400" />
                <p>{defense}</p>
              </span>
              <span className="flex flex-row gap-2">
                <Sparkles className="text-purple-400" />
                <p className="line-clamp-2 block">{magic}</p>
              </span>
            </div>
            <p className="line-clamp-3 overflow-hidden text-ellipsis">{lore}</p>

            <button
              // eslint-disable-next-line no-undef
              onClick={() => {
                onSelect(data);
                console.log(data);
              }}
              className="mt-4 bg-blue-600 px-6 py-2 font-bold hover:bg-blue-700 transition-colors"
            >
              Ver Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionCard;
