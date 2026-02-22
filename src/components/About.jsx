import imagemPoro from "../img/poro.jpg";
import imagemPorinhos from "../img/porinhos.jpg";
import imagemPoroMago from "../img/poromago.jpg";

function About() {
  return (
    <section className="relative overflow-hidden flex justify-center pb-[80px] items-center gap-[250px] mb-[100px] px-[0px] py-[50px]">
      <div
        className="overflow-y-scroll 2xl:overflow-visible z-20 w-[100%] xl:w-[35%] h-[75vh] bg-black/50 backdrop-blur-md p-12 shadow-2xl 
                        flex flex-col justify-start"
      >
        <h1 className="font-ptsans text-4xl font-bold italic mb-6 text-[#ebbb69]">
          O QUE É LIBRARY OF LEGENDS?
        </h1>
        <p className="flex flex-col justify-around font-inter text-xl text-justify text-white leading-relaxed flex-1">
          <span>
            O Library of Legends nasceu com uma missão muito simples: organizar
            o caos. Porque convenhamos, são campeões demais, builds demais e
            sempre tem alguém dizendo que seu pick é troll.{" "}
          </span>
          <span>
            Esse projeto é tipo uma biblioteca arcana onde cada campeão tem seu
            cantinho especial. Aqui você pode explorar, descobrir roles, fuçar
            informações e talvez finalmente aceitar que sim, aquele campeão que
            você chama de “apelão” só está sendo bem jogado.
          </span>{" "}
          <span>
            O site foi criado como um projeto de aprendizado, então cada linha
            de código evolui quase tanto quanto um campeão full build aos 40
            minutos. Ainda está em desenvolvimento, então bugs podem aparecer.
            Considere eles easter eggs não intencionais.
          </span>{" "}
          <span>
            Seja bem vindo. Escolha seu campeão. E lembre-se:{" "}
            <span>a culpa nunca é do jungle. Ou quase nunca.</span>
          </span>
        </p>
      </div>
      <div className="relative z-10 w-[40%] h-[75vh] hidden xl:block ">
        {/* Esta imagem fica atrás (base) */}
        <img
          className="absolute top-0 -left-[100px] w-[90%] h-[110%] object-cover object-[-240px] rounded-t-[35px] -rotate-[15deg] shadow-2xl border-2 z-20 border-[#a38043]"
          src={imagemPoro}
          alt="Poro de fundo"
        />

        {/* Esta imagem fica na frente e rotacionada */}
        <img
          className="absolute top-20 left-[110px] w-[90%] h-[110%] object-cover object-[-190px] rounded-t-[35px] rotate-[15deg] shadow-2xl border-2 border-[#a38043] "
          src={imagemPorinhos}
          alt="Poro da frente"
        />
        <img
          className="absolute top-10 left-10 w-[90%] h-[110%] object-cover object-[-190px] rounded-t-[35px] shadow-2xl border-2 border-[#a38043] "
          src={imagemPoroMago}
          alt="Poro da frente"
        />
      </div>
      <div
        className="flex flex-col items-center absolute top-[90%] -left-12 w-[130%] h-[70%] 
              bg-gradient-to-tr from-[#0e2333] to-[#209ba9]
              -rotate-6 origin-top-left"
      ></div>
      <div
        className="z-10 flex flex-col items-center absolute top-[90%] -left-12 w-[130%] h-[70%] 
              bg-gradient-to-t from-[#0e2333] to-[#209ba9]
              -rotate-6 origin-botton-left"
      ></div>
      <div
        className="flex flex-col items-center absolute -top-[50%] -left-12 w-[150%] h-[70%] 
              bg-gradient-to-tl from-[#0e2333] to-[#209ba9]
              -rotate-6 origin-top-left"
      ></div>
      <div
        className="flex flex-col items-center absolute -top-[50%] -left-12 w-[150%] h-[70%] 
              bg-gradient-to-tl from-[#0e2333] to-[#209ba9]
              -rotate-6 origin-botton-left"
      ></div>
    </section>
  );
}

export default About;
