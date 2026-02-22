import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import CardsSection from "./components/CardsSection";
import Header from "./components/Header";
import { getChampions } from "./services/champions";

function App() {
  const [championsList, setChampionsList] = useState([]);

  useEffect(() => {
    async function fetchChampions() {
      try {
        const champions = await getChampions();
        setChampionsList(champions);
      } catch (error) {
        console.log(error);
      }
    }

    fetchChampions();
  }, []);

  return (
    <div className="max-w-screen min-h-screen bg-cover bg-center bg-fixed bg-[url('./img/Design_sem_nome_25.png')]">
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center">
        <About />
        <CardsSection champions={championsList} />
      </main>
    </div>
  );
}

export default App;
