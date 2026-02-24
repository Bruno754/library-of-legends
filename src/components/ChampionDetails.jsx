import { useEffect, useState } from "react";
import {
  ArrowRight,
  Swords,
  Sparkles,
  LineChart,
  Star,
  Shield,
} from "lucide-react";

function ChampionDetails({ data, onClose }) {
  const [detailedData, setDetailedData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      try {
        setLoading(true);

        const resp = await fetch(
          `https://ddragon.leagueoflegends.com/cdn/14.23.1/data/pt_BR/champion/${data.id}.json`,
        );
        const json = await resp.json();
        setDetailedData(json.data[data.id]);
      } catch (err) {
        console.error("Erro ao buscar detalhes:", err);
      } finally {
        setLoading(false);
      }
    }

    if (data?.id) {
      fetchDetails();
    }
  }, [data.id]);

  return (
    <div className="h-screen w-screen flex justify-center items-center fixed top-0 left-0 z-50 backdrop-blur-md bg-black/50">
      <div className="relative w-full lg:w-[80%] h-full lg:h-[75%] bg-zinc-900 flex overflow-hidden">
        <button
          onClick={() => onClose()}
          className="absolute text-white h-[50px] w-[90px] flex justify-center items-center bg-rose-500 right-[0%]"
        >
          <ArrowRight />
        </button>
        <div
          className="h-full w-[60%] bg-red-500 object-cover object-[75%]"
          style={{
            clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)",
          }}
        >
          <img
            className="h-full w-full object-cover"
            src={data.image}
            alt={data.name}
          />
        </div>

        <div className="absolute top-[10%] -right-[0%] w-[40%] h-full flex flex-col justify-center p-10 z-20">
          <h1 className="absolute top-0 right-[5%] text-white text-6xl font-bold italic uppercase">
            {data.name || "Champion"}
          </h1>
          <p className="overflow-y-scroll 2xl:overflow-visible text-lg italic text-right w-[100%] h-[40%] p-10 absolute top-[10%] right-[0%] text-white">
            {detailedData ? detailedData.lore : "Carregando biografia..."}
          </p>
          <div className="absolute bottom-[30%] right-[5%] text-white flex flex-col lg:flex-row gap-3 lg:gap-10">
            <span className="flex flex-row gap-2">
              <Star className="text-yellow-400" />
              <p>DIFICULDADE</p>
              <p>{data.difficulty}</p>
            </span>
            <span className="flex flex-row gap-2">
              <Swords className="text-blue-400" />
              <p>ATAQUE</p>
              <p>{data.attack}</p>
            </span>
            <span className="flex flex-row gap-2">
              <Shield className="text-green-400" />
              <p>DEFESA</p>
              <p>{data.defense}</p>
            </span>
            <span className="flex flex-row gap-2">
              <Sparkles className="text-purple-400" />
              <p>MAGIA</p>
              <p className="line-clamp-2 block">{data.magic}</p>
            </span>
          </div>

          <div className="absolute bottom-[15%] right-[5%] flex gap-7">
            <button className="text-white border-2 p-3 flex gap-3 rounded-xl">
              <Swords />
              <span>HABILIDADES</span>
            </button>
            <button className="text-white border-2 p-3 flex gap-3 rounded-xl">
              <LineChart />
              <span>ESTATISTICAS</span>
            </button>
            <button className="text-white border-2 p-3 flex gap-3 rounded-xl">
              <Sparkles />
              <span>SKINS</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChampionDetails;
