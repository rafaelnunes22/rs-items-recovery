import Image from "next/image";
import veicles from "../../../../images/veicles.png";

export default function Veicles() {
  return (
    <main className="flex flex-col p-5 gap-3">
      <h1 className="text-4xl font-bold text-center">Recuperando veículos</h1>
      <Image
        className="self-center"
        src={veicles}
        alt="Imagem de fundo branco com veículos em sobreposição (moto, carro, van e caminhão)"
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
            <a href="#moto">1. Moto</a>
          </li>
        </ul>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="moto">
        <h2 className="text-2xl font-bold ">Moto</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/13_WKZK6n10"
          title="Veículo ALAGADO na ENCHENTE: O que fazer? TEM CONSERTO? Estraga? Carro, moto, caminhão. PERDA TOTAL"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
