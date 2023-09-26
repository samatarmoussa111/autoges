import { AppLinks, footerLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Coders Monkeys",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Formations",
    baseUrl: "https://youtube.com",
    type: "external",
  },
];

const footerUserLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];
const footerInformationLinks: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "A propos",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/#",
    type: "external",
  },
];
export const footerSocialNetworksLiks: AppLinks[] = [
  {
    label: "Youtube",
    baseUrl: "https://youtube.com",
    type: "external",
    icon: RiYoutubeFill,
  },
  {
    label: "Linkedin",
    baseUrl: "https://linkedin.com",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Slack",
    baseUrl: "https://slack.com",
    type: "external",
    icon: RiSlackFill,
  },
];

export const footerLink: footerLinks[] = [
  {
    title: "App",
    data: footerApplicationLinks,
  },
  {
    title: "Utilisateurs",
    data: footerUserLinks,
  },
  {
    title: "Informations",
    data: footerInformationLinks,
  },
  {
    title: "Reseaux sociaux",
    data: footerSocialNetworksLiks,
  },
];
