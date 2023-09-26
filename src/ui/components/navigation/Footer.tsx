import Typography from "@/ui/design-system/typography/Typography";
import Container from "../container/Container";
import Image from "next/image";
import { footerLink } from "./appLinks";
import { v4 as uuidv4 } from "uuid";
import { AppLinks } from "@/types/app-links";
import ActiveLink from "./ActiveLink";
import { LinkTypes } from "@/lib/link-type";
import SocialNetworkButtons from "./SocialNetworkButtons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLink.map((item) => {
    return (
      <div className="flex gap-7" key={uuidv4()}>
        {" "}
        <FooterLink title={item.title} data={item.data} />
      </div>
    );
  });

  return (
    <div className="bg-gray ">
      <Container className="flex justify-between pt-16">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="caption1" theme="white" weight="medium">
            Formations gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          <a href="https://youtube.com" target="_blanck">
            <Image
              src="/assets/svg/YTB.svg"
              alt="coders monkey"
              width={229}
              height={216}
            />
          </a>
        </div>
        {footerNavigationList}
      </Container>
      <Container className="pt-9 pb-11 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex justify-between items-center">
          <Typography variant="caption4" theme="gray">
            {`Copyright @ ${currentYear} | réalisée par `}{" "}
            <a href="" target="_black" className="underline">
              {`Samatar Moussa - Developpeur web & mobile`}
            </a>
          </Typography>
          <div className="">
            <SocialNetworkButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: AppLinks[];
  title: string;
}

const FooterLink = ({ data, title }: footerLinkProps) => {
  const linkList = data.map((link: any) => {
    return (
      <div key={uuidv4()}>
        {link.type === LinkTypes.INTERNAL && (
          <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
        )}
        {link.type === LinkTypes.EXTERNAL && (
          <a href={link.baseUrl} target="_blank">
            {link.label}
          </a>
        )}
      </div>
    );
  });
  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {title}
      </Typography>
      <Typography variant="caption3" theme="gray" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};

export default Footer;
