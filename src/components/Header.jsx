import { UserRound, Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [displayMenu, setDisplayMenu] = useState(false);
  const navigate = useNavigate();

  let showMenu = displayMenu ? "flex" : "hidden";

  function changeDisplayMenu() {
    setDisplayMenu(!displayMenu);
  }

  return (
    <header className="relative shadow-xs flex flex-col max-w-screen justify-between items-center border-b-2 border-[#a38043] bg-zinc-900">
      <div className="w-full">
        <div className="flex flex-row w-full justify-between items-center px-10 py-4">
          <h1 className="font-ptsans text-4xl font-bold italic text-[#ebbb69]">
            LIBRARY OF LEGENDS
          </h1>
          <nav>
            <ul className="font-inter font-bold hidden xl:flex justify-center items-center gap-7 text-xl text-white">
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
            <button
              onClick={() => changeDisplayMenu()}
              className="w-[45px] xl:hidden"
            >
              <Menu className="text-white w-full h-full" />
            </button>
          </nav>
        </div>
        <div
          className={`z-50 flex-col justify-center items-center ${showMenu}`}
        >
          <ul className="tracking-widest w-full font-inter font-bold gap-7 text-xl text-white">
            <li>
              <button className="w-full py-[15px] border-b-2 border-[#a38043]">
                PESQUISAR
              </button>
            </li>
            <li>
              <button className="w-full py-[15px] border-b-2 border-[#a38043] ">
                CAMPEÕES
              </button>
            </li>
            <li>
              <button className="w-full py-[15px] border-b-2 border-[#a38043]">
                ITENS
              </button>
            </li>
            <li>
              <button className="w-full py-[15px] border-b-2 border-[#a38043]">
                SCORE
              </button>
            </li>
            <li>
              <button className="w-full py-[15px] border-b-2 border-[#a38043]">
                LOGIN
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
