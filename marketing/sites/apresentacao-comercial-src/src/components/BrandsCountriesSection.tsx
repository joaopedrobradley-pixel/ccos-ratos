import { FlagIcon, type FlagKey } from "@/components/FlagIcon";
import { motion } from "framer-motion";

import brandAmazon from "@/assets/brands/amazon.png";
import brandAmbev from "@/assets/brands/ambev.png";
import brandCocaCola from "@/assets/brands/coca_cola.png";
import brandGol from "@/assets/brands/gol.png";
import brandGoogle from "@/assets/brands/google.png";
import brandItau from "@/assets/brands/itau.png";
import brandMicrosoft from "@/assets/brands/microsoft.png";
import brandNubank from "@/assets/brands/nubank.png";
import brandSantander from "@/assets/brands/santander.png";
import brandStone from "@/assets/brands/stone.png";

import brandMercantil from "@/assets/brands2/mercantil.png";
import brandBuzzmonitor from "@/assets/brands2/buzzmonitor.png";
import brandHeineken from "@/assets/brands2/heineken.jpg";
import brandOlx from "@/assets/brands2/olx.png";
import brandUnilever from "@/assets/brands2/unilever.jpg";
import brandXp from "@/assets/brands2/xp.jpg";
import brandSephora from "@/assets/brands2/sephora.jpg";
import brandRede from "@/assets/brands2/rede.jpg";

import brandTripleten from "@/assets/brands3/tripleten.png";
import brandPinpeople from "@/assets/brands3/pinpeople.png";
import brandSwissport from "@/assets/brands3/swissport.jpg";
import brandNibo from "@/assets/brands3/nibo.jpg";
import brandAccenture from "@/assets/brands3/accenture.jpg";
import brandAdecco from "@/assets/brands3/adecco.png";
import brandAlpargatas from "@/assets/brands3/alpargatas.jpg";
import brandAppetite from "@/assets/brands3/appetite.jpg";
import brandAsa from "@/assets/brands3/asa.jpg";
import brandBairesdev from "@/assets/brands3/bairesdev.png";

import brandSolver from "@/assets/brands4/solver.jpg";
import brandDowning from "@/assets/brands4/downing.jpg";
import brandPaulistao from "@/assets/brands4/paulistao.jpg";
import brandEy from "@/assets/brands4/ey.jpg";
import brandGentia from "@/assets/brands4/gentia.jpg";
import brandSirio from "@/assets/brands4/sirio-libanes.jpg";
import brandMoura from "@/assets/brands4/moura.png";
import brandInfluency from "@/assets/brands4/influency.jpg";
import brandIntelbras from "@/assets/brands4/intelbras.png";
import brandJequiti from "@/assets/brands4/jequiti.jpg";

import brandKenvue from "@/assets/brands5/kenvue.jpg";
import brandKnowbe4 from "@/assets/brands5/knowbe4.jpg";
import brandLiferay from "@/assets/brands5/liferay.jpg";
import brandFeedz from "@/assets/brands5/feedz.jpg";
import brandPagueMenos from "@/assets/brands5/paguemenos.jpg";
import brandPraso from "@/assets/brands5/praso.jpg";
import brandScanntech from "@/assets/brands5/scanntech.jpg";
import brandMouraDubeux from "@/assets/brands5/mouradubeux.jpg";
import brandCtc from "@/assets/brands5/ctc.jpg";
import brandMovida from "@/assets/brands5/movida.jpg";

import brandVerzani from "@/assets/brands6/verzani.jpg";
import brandV4check from "@/assets/brands6/v4check.jpg";
import brandNowmed from "@/assets/brands6/nowmed.jpg";
import brandMontijo from "@/assets/brands6/montijo.jpg";
import brandBwa from "@/assets/brands6/bwa.jpg";
import brandZenvia from "@/assets/brands6/zenvia.png";
import brandFiesc from "@/assets/brands6/fiesc.jpg";
import brandMaxim from "@/assets/brands6/maxim.jpg";
import brandMichaelPage from "@/assets/brands6/michaelpage.jpg";
import brandMlabs from "@/assets/brands6/mlabs.jpg";

import brandNbc from "@/assets/brands7/nbc.jpg";
import brandNetcracker from "@/assets/brands7/netcracker.png";
import brandNissin from "@/assets/brands7/nissin.jpg";
import brandBoticario from "@/assets/brands7/boticario.jpg";
import brandLg from "@/assets/brands7/lg.jpg";
import brandPortoSeguro from "@/assets/brands7/portoseguro.jpg";
import brandRdStation from "@/assets/brands7/rdstation.jpg";
import brandReddit from "@/assets/brands7/reddit.png";
import brandRedeDor from "@/assets/brands7/rededor.jpg";
import brandRede2 from "@/assets/brands7/rede2.jpg";

import brandRumo from "@/assets/brands8/rumo.jpg";
import brandSemParar from "@/assets/brands8/semparar.jpg";
import brandSiemens from "@/assets/brands8/siemens.jpg";
import brandDataStone from "@/assets/brands8/datastone.png";
import brandSuperFrete from "@/assets/brands8/superfrete.jpg";
import brandTaniaBulhoes from "@/assets/brands8/taniabulhoes.jpg";
import brandTotvs from "@/assets/brands8/totvs.jpg";
import brandV4Company from "@/assets/brands8/v4company.jpg";
import brandVeja from "@/assets/brands8/veja.jpg";
import brandViaVarejo from "@/assets/brands8/viavarejo.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" as const },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
};

type Props = {
  /** Tailwind gradient "from-*" class matching section background for fade overlays. */
  fadeFrom?: string;
  /** Extra classes on the wrapping <section>. */
  className?: string;
};

export default function BrandsCountriesSection({
  fadeFrom = "from-paper",
  className = "",
}: Props) {
  const brandLogos = [
    { src: brandGoogle, alt: "Google" },
    { src: brandMicrosoft, alt: "Microsoft" },
    { src: brandAmazon, alt: "Amazon" },
    { src: brandNubank, alt: "Nubank" },
    { src: brandItau, alt: "Itaú" },
    { src: brandSantander, alt: "Santander" },
    { src: brandStone, alt: "Stone" },
    { src: brandAmbev, alt: "Ambev" },
    { src: brandCocaCola, alt: "Coca-Cola" },
    { src: brandGol, alt: "GOL" },
  ];
  const brandLogos2 = [
    { src: brandMercantil, alt: "Banco Mercantil" },
    { src: brandBuzzmonitor, alt: "Buzzmonitor" },
    { src: brandHeineken, alt: "Heineken" },
    { src: brandOlx, alt: "OLX" },
    { src: brandUnilever, alt: "Unilever" },
    { src: brandXp, alt: "XP Investimentos" },
    { src: brandSephora, alt: "Sephora" },
    { src: brandRede, alt: "Rede" },
  ];
  const brandLogos3 = [
    { src: brandTripleten, alt: "Tripleten" },
    { src: brandPinpeople, alt: "PinPeople" },
    { src: brandSwissport, alt: "Swissport" },
    { src: brandNibo, alt: "Nibo" },
    { src: brandAccenture, alt: "Accenture" },
    { src: brandAdecco, alt: "Adecco" },
    { src: brandAlpargatas, alt: "Alpargatas" },
    { src: brandAppetite, alt: "Appetite Gourmet" },
    { src: brandAsa, alt: "ASA" },
    { src: brandBairesdev, alt: "BairesDev" },
  ];
  const brandLogos4 = [
    { src: brandSolver, alt: "Solver Tecnologias" },
    { src: brandDowning, alt: "Downing" },
    { src: brandPaulistao, alt: "Paulistão Atacadista" },
    { src: brandEy, alt: "EY" },
    { src: brandGentia, alt: "Gentia" },
    { src: brandSirio, alt: "Sírio-Libanês" },
    { src: brandMoura, alt: "Moura" },
    { src: brandInfluency, alt: "Influency.me" },
    { src: brandIntelbras, alt: "Intelbras" },
    { src: brandJequiti, alt: "Jequiti" },
  ];
  const brandLogos5 = [
    { src: brandKenvue, alt: "Kenvue" },
    { src: brandKnowbe4, alt: "KnowBe4" },
    { src: brandLiferay, alt: "Liferay" },
    { src: brandFeedz, alt: "Feedz" },
    { src: brandPagueMenos, alt: "Pague Menos" },
    { src: brandPraso, alt: "Praso" },
    { src: brandScanntech, alt: "Scanntech" },
    { src: brandMouraDubeux, alt: "Moura Dubeux" },
    { src: brandCtc, alt: "CTC" },
    { src: brandMovida, alt: "Movida" },
  ];
  const brandLogos6 = [
    { src: brandVerzani, alt: "Verzani & Sandrini" },
    { src: brandV4check, alt: "V4" },
    { src: brandNowmed, alt: "Nowmed" },
    { src: brandMontijo, alt: "Montijo Digital Agency" },
    { src: brandBwa, alt: "BWA Global" },
    { src: brandZenvia, alt: "Zenvia" },
    { src: brandFiesc, alt: "FIESC" },
    { src: brandMaxim, alt: "Maxim" },
    { src: brandMichaelPage, alt: "Michael Page" },
    { src: brandMlabs, alt: "mLabs" },
  ];
  const brandLogos7 = [
    { src: brandNbc, alt: "NBC Universal" },
    { src: brandNetcracker, alt: "Netcracker" },
    { src: brandNissin, alt: "Nissin" },
    { src: brandBoticario, alt: "O Boticário" },
    { src: brandLg, alt: "LG" },
    { src: brandPortoSeguro, alt: "Porto Seguro" },
    { src: brandRdStation, alt: "RD Station Marketing" },
    { src: brandReddit, alt: "Reddit" },
    { src: brandRedeDor, alt: "Rede D'Or" },
    { src: brandRede2, alt: "Rede" },
  ];
  const brandLogos8 = [
    { src: brandRumo, alt: "Rumo Logística" },
    { src: brandSemParar, alt: "Sem Parar" },
    { src: brandSiemens, alt: "Siemens" },
    { src: brandDataStone, alt: "Data Stone" },
    { src: brandSuperFrete, alt: "SuperFrete" },
    { src: brandTaniaBulhoes, alt: "Tania Bulhões" },
    { src: brandTotvs, alt: "TOTVS" },
    { src: brandV4Company, alt: "V4 Company" },
    { src: brandVeja, alt: "Veja" },
    { src: brandViaVarejo, alt: "Via Varejo" },
  ];

  const countries: { name: FlagKey }[] = [
    { name: "Canadá" },
    { name: "Brasil" },
    { name: "Estados Unidos" },
    { name: "México" },
    { name: "Portugal" },
    { name: "Espanha" },
    { name: "Itália" },
    { name: "Inglaterra" },
    { name: "Grécia" },
    { name: "Reino Unido" },
    { name: "França" },
    { name: "Irlanda" },
  ];

  const rows = [
    { data: brandLogos, dir: "" as const, big: true },
    { data: brandLogos2, dir: "-reverse" as const, big: false },
    { data: brandLogos3, dir: "" as const, big: false },
    { data: brandLogos4, dir: "-reverse" as const, big: false },
    { data: brandLogos5, dir: "" as const, big: false },
    { data: brandLogos6, dir: "-reverse" as const, big: false },
    { data: brandLogos7, dir: "" as const, big: false },
    { data: brandLogos8, dir: "-reverse" as const, big: false },
  ];

  return (
    <section className={`overflow-hidden px-4 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.p
          {...fadeUp}
          className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55"
        >
          Onde nossos alunos chegaram
        </motion.p>
        <motion.h2
          {...fadeUp}
          className="text-balance text-center text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl"
        >
          As empresas onde nossa metodologia{" "}
          <span className="font-light text-aqua">abriu portas</span>
        </motion.h2>
      </div>

      <div className="mt-12 space-y-8">
        {rows.map((row, idx) => (
          <div key={idx} className="relative overflow-hidden">
            <div
              className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeFrom} to-transparent md:w-32`}
            />
            <div
              className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeFrom} to-transparent md:w-32`}
            />
            <div
              className={`flex items-center gap-10 whitespace-nowrap md:gap-12 ${
                row.dir === "-reverse" ? "animate-marquee-reverse" : "animate-marquee"
              }`}
            >
              {[...row.data, ...row.data].map((b, i) => (
                <img
                  key={i}
                  src={b.src}
                  alt={b.alt}
                  className={`w-auto shrink-0 object-contain opacity-80 transition hover:opacity-100 ${
                    row.big ? "h-11 md:h-16" : "h-8 md:h-11"
                  }`}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 md:mt-28">
        <div className="mx-auto max-w-6xl">
          <motion.p
            {...fadeUp}
            className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/55"
          >
            Presença internacional
          </motion.p>
          <motion.h2
            {...fadeUp}
            className="text-balance text-center text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl"
          >
            Alunos conquistando vagas em{" "}
            <span className="font-light text-aqua">12 países</span>
          </motion.h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-ink/60 md:text-lg">
            De São Paulo a Lisboa, de Nova York a Roma, onde há oportunidade, nossos mentorados chegam.
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r ${fadeFrom} to-transparent md:w-32`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l ${fadeFrom} to-transparent md:w-32`}
          />
          <div className="flex animate-marquee-flags-reverse items-center gap-10 whitespace-nowrap md:gap-14">
            {[...countries, ...countries, ...countries].map((c, i) => (
              <span key={i} className="shrink-0 opacity-90">
                <FlagIcon country={c.name} className="h-7 w-auto md:h-9" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
