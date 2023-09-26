import Logo from "@/ui/design-system/logo/Logo";
import Container from "../container/Container";
import Typography from "@/ui/design-system/typography/Typography";
import Button from "@/ui/design-system/button/Button";
import Link from "next/link";
import ActiveLink from "./ActiveLink";

interface Props {}

const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-400">
      <Container className="py-1.5 flex items-center justify-between gap-7">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div className="flex flex-col ">
              <div className="text-gray font-extrabold text-[24px]">
                Coders Monkeys
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Trouve de l'inspiration & reçois des feedBacks
              </Typography>
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-7">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Design system</ActiveLink>
            <ActiveLink href="/projets">Projets</ActiveLink>
            <ActiveLink href="/formations">Formations</ActiveLink>
            <ActiveLink href="/contact">Contact</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Link href="/connexion">
              <Button size="small">Connexion</Button>
            </Link>

            <Link href="/connexion/inscription">
              <Button size="small" variant="secondary">
                Rejoindre
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navigation;
