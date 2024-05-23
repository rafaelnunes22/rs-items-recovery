import Image from "next/image";
import eletronics from "../../../../images/eletronics.png";

export default function Eletronics() {
  return (
    <main className="flex flex-col p-5 gap-3">
      <h1 className="text-4xl font-bold text-center">
        Recuperando Eletrônicos
      </h1>
      <Image
        className="self-center"
        src={eletronics}
        alt="Imagem de fundo branco com diversos aparelhos eletrônicos (computador, celular, notebnook e outros)"
      />
      <desc className="text-black">
        Pessoal, aqui está reunido informações que diversas pessoas e empresas
        compartilharam publicamente para ajudar nesse recomeço. <br />
        Se isso foi útil de alguma forma, ajude o trabalho dessas pessoas indo
        no perfil delas e curtindo como forma de agradecimento.
      </desc>
      <section className="h-fit">
        <ul className="border rounded p-3 border-black">
          <li>
            <a href="#computadores-e-notebooks">1. Computadores e Notebooks</a>
          </li>
          <li>
            <a href="#aparelhos-eletronicos-em-gera">
              2. Aparelho eletrônicos em geral
            </a>
          </li>
        </ul>
      </section>
      <section
        className="h-fit flex flex-col gap-4 mt-4"
        id="computadores-e-notebooks"
      >
        <h2 className="text-2xl font-bold ">Computadores e Notebooks</h2>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/AnrQyRMfBRM"
          title="COMO LIMPAR E SALVAR SEU COMPUTADOR DE ENCHENTE"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section
        className="h-fit flex flex-col gap-4 mt-4"
        id="aparelhos-eletronicos-em-geral"
      >
        <h2 className="text-2xl font-bold ">Aparelhos eletrônicos em geral</h2>
        <iframe
          width="100%"
          height="300"
          src="https://www.youtube.com/embed/WawfDxTrkIU"
          title="Recuperando eletrônicos após a enchente: Dicas vitais! 📱💻"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
