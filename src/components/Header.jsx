import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="shadow-xs flex w-screen justify-between items-center border-b-2 border-[#a38043] px-10 py-4 bg-zinc-900">
      <h1 className="font-ptsans text-4xl font-bold italic text-[#ebbb69]">
        LIBRARY OF LEGENDS
      </h1>
      <nav>
        <ul className="font-inter font-bold flex justify-center items-center gap-7 text-xl text-white">
          <li>
            <input
              className="w-100 bg-zinc-700 rounded-2xl border-gray-300 placeholder-zinc-400 text-1xl font-normal italic px-7 py-3 mr-5"
              placeholder="Procure seu campeão"
              type="text"
            />
          </li>
          <li>
            <button onClick={() => navigate("/champions")}>CAMPEÕES</button>
          </li>
          <li>
            <button>ITENS</button>
          </li>
          <li>
            <button>SCORE</button>
          </li>
          <li>
            {" "}
            <button className="ml-5 text-white bg-[#a38043] p-3 rounded-2xl">
              <UserRound className="w-8 h-8 transition delay-0 duration-300 ease-in-out hover:scale-120" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
