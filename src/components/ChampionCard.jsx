function ChampionCard({ champName, id }) {
  const imageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_0.jpg`;

  return (
    <div className="relative overflow-hidden bg-white min-h-[500px] border-[1px] border-[#a38043] rounded-[40px]">
      <img
        className="h-[65%] object-[75%] object-cover"
        src={`${imageURL}`}
        alt=""
      />
      <div
        className="flex flex-col items-center absolute top-[60%] -left-12 w-[130%] h-[70%] 
              bg-gradient-to-tr from-[#0e2333] to-[#209ba9]
              -rotate-6 origin-top-left"
      >
        <h1 className="font-ptsans font-bold italic text-3xl text-[white]">
          {champName}
        </h1>
      </div>
    </div>
  );
}

export default ChampionCard;
