import { LinkType } from "@/lib/link-type";
import { IconType } from "react-icons/lib";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
  icon?: IconType;
}

export interface footerLinks {
  title: string;
  data: AppLinks[];
}
