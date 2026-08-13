import michaelPage from "@/assets/parceiros/michael-page.png";
import audens from "@/assets/parceiros/audens.jpeg";
import bairesdev from "@/assets/parceiros/bairesdev-icon.png";

export interface Partner {
  id: string;
  name: string;
  logo: string;
  description: string;
  site?: string;
}

export const PARTNERS: Partner[] = [
  {
    id: "michael-page",
    name: "Michael Page",
    logo: michaelPage,
    description: "Consultoria global de recrutamento especializado.",
    site: "https://www.michaelpage.com.br",
  },
  {
    id: "audens",
    name: "Audens Group",
    logo: audens,
    description: "Grupo de expansão e consultoria empresarial.",
    site: "https://www.audensgroup.com.br/",
  },
  {
    id: "bairesdev",
    name: "BairesDev",
    logo: bairesdev,
    description: "Empresa de outsourcing de tecnologia com atuação internacional.",
    site: "https://www.bairesdev.com",
  },
];
