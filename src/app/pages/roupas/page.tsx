import Image from "next/image";
import clothes from "../../../../images/clothes.png";

export default function Clothes() {
  return (
    <main className="flex flex-col p-5 gap-3">
      <h1 className="text-4xl font-bold text-center">Recuperando roupas</h1>
      <Image
        className="self-center"
        src={clothes}
        alt="Imagem de fundo branco com roupas dobradas"
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
            <a href="#lavagem">1. Lavagem</a>
          </li>
        </ul>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="lavagem">
        <h2 className="text-2xl font-bold ">Lavagem</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/LEOd9pM_tPw"
          title="COMO LAVAR ROUPAS ATINGIDAS POR ENCHENTE."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
