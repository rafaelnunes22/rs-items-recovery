import Image from "next/image";
import { Card } from "./components/card/Card";
import clothes from "../../images/clothes.png";
import eletronics from "../../images/eletronics.png";
import homeAppliances from "../../images/homeAppliances.png";
import vakinhaQRCode from "../../images/vakinha-da-mari.svg";
import styles from "./styles.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.main__section1}>
        <div className={styles.main__section1__div}>
          <h1 className={styles.main__section1__div__h1}>
            INFORMAÇÕES ÚTEIS PARA RECUPERAÇÃO DOS SEUS PERTENCES ATINGIDOS PELA
            ENCHENTE
          </h1>
        </div>
      </section>
      <section className={styles.main__section2}>
        <Card
          title="Eletrodomésticos"
          content="Dicas para que você faça o possível para recuperar seus eletrodomesticos"
          button="Ir para página"
          imageSrc={homeAppliances}
          imageAlt="Imagem de fundo branco com diversos eletrodomésticos (geladeira, fogão, microondas e outros)"
          href="/pages/eletrodomesticos"
        />
        <Card
          title="Eletrônicos"
          content="Dicas para recuperação de seus aparelhos eletrônicos"
          button="Ir para página"
          imageSrc={eletronics}
          imageAlt="Imagem de fundo branco com diversos eletrodomésticos (geladeira, fogão, microondas e outros)"
        />
        <Card
          title="Roupas"
          content="Dicas para lavar e desinfetar suas roupas contaminadas"
          button="Ir para página"
          imageSrc={clothes}
          imageAlt="Imagem de fundo branco com diversos eletrodomésticos (geladeira, fogão, microondas e outros)"
        />
        <Card
          title="Roupas"
          content="Dicas para lavar e desinfetar suas roupas contaminadas"
          button="Ir para página"
          imageSrc={homeAppliances}
          imageAlt="Imagem de fundo branco com diversos eletrodomésticos (geladeira, fogão, microondas e outros)"
        />
      </section>
      <section className={styles.main__section3}>
        <h2 className={styles.main__section3__h2}>
          Ajude a Mari e seus gatinhos
        </h2>
        <Image priority src={vakinhaQRCode} alt="Link da vakinha para ajudar" />
        <a
          href="https://www.vakinha.com.br/4757838"
          className={styles.main__section3__a}
        >
          https://www.vakinha.com.br/4757838
        </a>
      </section>
    </main>
  );
}
