import Image from "next/image";
import homeAppliances from "../../../../images/homeAppliances.png";

export default function HomeAppliances() {
  return (
    <main className="flex flex-col p-5 gap-3">
      <h1 className="text-4xl font-bold text-center">
        Recuperando eletrodomésticos
      </h1>
      <Image
        className="self-center"
        src={homeAppliances}
        alt="Imagem de fundo branco com diversos eletrodomésticos (geladeira, fogão, microondas e outros)"
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
            <a href="#geladeira">1. Geladeira</a>
          </li>
          <li>
            <a href="#forno/microondas">2. Forno/Microondas</a>
          </li>
          <li>
            <a href="#maquina-de-lavar">3. Máquina de Lavar</a>
          </li>
          <li>
            <a href="#tomada">4. Tomada</a>
          </li>
        </ul>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="geladeira">
        <h2 className="text-2xl font-bold ">Geladeira</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/7jiHe5gV1fk"
          title="geladeira molhou  ou ficou submersa tem jeito"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="forno/microondas">
        <h2 className="text-2xl font-bold">Forno/Microondas</h2>
        <blockquote
          className="tiktok-embed"
          cite="https://www.tiktok.com/@rafaelobruxo/video/7365940642356219141"
          data-video-id="7365940642356219141"
        >
          <section>
            <a
              target="_blank"
              title="@rafaelobruxo"
              href="https://www.tiktok.com/@rafaelobruxo?refer=embed"
            >
              @rafaelobruxo
            </a>
            Pessoal repassem pra quem estiver passando por problemas na
            enchente! Explico no vídeo como você pode fazer para salvar seus
            equipamentos! @Mago Das Tvs 1- tire da tomada, 2- identifique as
            partes eletrônicas. 3- Lave tudo em água corrente com detergente
            neutro. 4- enxague novamente. 5- Deixe secar tudo no Sol por dois
            dias! Faça a montagem! Se conseguir filme a desmontagem para saber
            como fazer a montagem depois! Para evitar riscos de choque elétrico,
            tire o equipamento da tomada, aguarde algumas horas antes de lavar
            as placas eletrônicas.
            <a
              title="forcariograndedosul😭😭😭"
              target="_blank"
              href="https://www.tiktok.com/tag/forcariograndedosul%F0%9F%98%AD%F0%9F%98%AD%F0%9F%98%AD?refer=embed"
            >
              #forcariograndedosul😭😭😭
            </a>
            <a
              target="_blank"
              title="♬ som original - Rafael “O Bruxo”"
              href="https://www.tiktok.com/music/som-original-7365940666042092293?refer=embed"
            >
              ♬ som original - Rafael “O Bruxo”
            </a>
          </section>
        </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="maquina-de-lavar">
        <h2 className="text-2xl font-bold ">Máquina de lavar</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/xmygfvo3nwQ"
          title="Saiba como salvar sua Máquina de Lavar após enchentes 🧦 #chuva #shorts #lavadora"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
      <section className="h-fit flex flex-col gap-4 mt-4" id="tomada">
        <h2 className="text-2xl font-bold ">Tomada</h2>
        <iframe
          width="100%"
          height="500"
          src="https://www.youtube.com/embed/Zr_lD5BuQGo"
          title="COMO LIMPAR TOMADAS ATINGIDAS PELA ENCHENTE! #enchenters"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>
    </main>
  );
}
